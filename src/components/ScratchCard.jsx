import React, { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import confetti from 'canvas-confetti';

const ScratchCard = forwardRef(({ children, onComplete, width = 300, height = 300, scratchSize = 40 }, ref) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isScratched, setIsScratched] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const lastCheckTime = useRef(0);
  const isScratchedRef = useRef(isScratched);

  useEffect(() => {
    isScratchedRef.current = isScratched;
  }, [isScratched]);

  // Initialize canvas
  const initCanvas = () => {
    if (!containerRef.current || !canvasRef.current) return;
    
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    
    // Create a metallic gradient for a better scratch-off look
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#8c8c94'); // Silver
    gradient.addColorStop(0.5, '#e0e0e5'); // Light silver
    gradient.addColorStop(1, '#5a5a62'); // Dark silver
    
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add some noise for texture
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    for (let i = 0; i < (canvas.width * canvas.height) / 100; i++) {
      ctx.fillRect(
        Math.random() * canvas.width, 
        Math.random() * canvas.height, 
        1, 1
      );
    }
    
    // Add instruction text
    ctx.fillStyle = '#222'; // Dark text for contrast against silver
    ctx.font = 'bold 22px "Inter", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🖱️ SCRATCH TO REVEAL', canvas.width / 2, canvas.height / 2);
  };

  useImperativeHandle(ref, () => ({
    reset: () => {
      setIsScratched(false);
      setIsDrawing(false);
      setTimeout(() => initCanvas(), 0);
    }
  }));

  useEffect(() => {
    initCanvas();
    
    // Resize observer to handle responsive layout
    const observer = new ResizeObserver(() => {
      if (!isScratchedRef.current) {
        initCanvas();
      }
    });
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Scratching logic
  const getMousePos = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const scratch = (e) => {
    if (!isDrawing || isScratched) return;
    if (e.cancelable !== false) {
      e.preventDefault(); // Prevent scrolling on touch devices while scratching
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const { x, y } = getMousePos(e);

    ctx.globalCompositeOperation = 'destination-out';
    
    // Use dynamic brush size based on canvas width (e.g. 8% of width, min 20, max 60)
    const dynamicScratchSize = Math.max(20, Math.min(60, canvas.width * 0.08));
    const brushSize = scratchSize !== 40 ? scratchSize : dynamicScratchSize;

    // Draw jagged circle for a realistic brush look
    ctx.beginPath();
    ctx.arc(x, y, brushSize, 0, Math.PI * 2);
    ctx.fill();
    
    // Add some random smaller circles around it for rough edges
    for (let i = 0; i < 6; i++) {
        const offsetX = (Math.random() - 0.5) * brushSize * 1.5;
        const offsetY = (Math.random() - 0.5) * brushSize * 1.5;
        ctx.beginPath();
        ctx.arc(x + offsetX, y + offsetY, brushSize * (0.2 + Math.random() * 0.4), 0, Math.PI * 2);
        ctx.fill();
    }

    // Throttle completion check
    const now = Date.now();
    if (now - lastCheckTime.current > 100) {
        lastCheckTime.current = now;
        checkCompletion();
    }
  };

  const checkCompletion = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    
    let transparentPixels = 0;
    // Check every 40th pixel instead of every pixel (10x faster)
    const step = 40; 
    let totalCheckedPixels = 0;

    for (let i = 3; i < pixels.length; i += step) {
      totalCheckedPixels++;
      if (pixels[i] === 0) {
        transparentPixels++;
      }
    }

    const percentage = (transparentPixels / totalCheckedPixels) * 100;
    
    // If more than 40% is scratched, reveal completely
    if (percentage > 40 && !isScratchedRef.current) {
      setIsScratched(true);
      
      // Fire confetti
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ccff00', '#140e28', '#ffffff', '#8c8c94']
      });

      if (onComplete) {
        onComplete();
      }
    }
  };

  const handlePointerDown = (e) => {
    if (isScratched) return;
    setIsDrawing(true);
    scratch(e); // Scratch the initial click point
  };

  const handlePointerUp = () => {
    setIsDrawing(false);
    if (!isScratched) {
        checkCompletion(); // One final check on mouse up
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl w-full h-full select-none ${isScratched ? '' : 'cursor-crosshair'}`}
      style={{ touchAction: 'none' }} // Prevent scrolling on touch
    >
      {/* Revealed content (underneath) */}
      <div className="w-full h-full">
        {children}
      </div>

      {/* Canvas Cover */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full z-10 transition-opacity duration-700 ease-out ${isScratched ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        onMouseDown={handlePointerDown}
        onMouseMove={scratch}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
        onTouchStart={handlePointerDown}
        onTouchMove={scratch}
        onTouchEnd={handlePointerUp}
      />
    </div>
  );
});

export default ScratchCard;
