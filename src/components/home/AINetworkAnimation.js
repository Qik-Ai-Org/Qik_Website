import React, { useEffect, useRef } from "react";

const AINetworkAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    // Set canvas size with device pixel ratio for crisp rendering
    const resizeCanvas = () => {
      const container = canvas.parentElement;
      const dpr = window.devicePixelRatio || 1;
      
      // Use viewport dimensions for full background coverage
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      
      ctx.scale(dpr, dpr);
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Animation variables
    const nodes = [];
    const connections = [];
    const numNodes = 45;
    const maxDistance = 140;
    let animationId;

    // Create nodes with enhanced properties
    for (let i = 0; i < numNodes; i++) {
      const nodeType = Math.random();
      let type = 'normal';
      if (nodeType > 0.85) type = 'hub';
      else if (nodeType > 0.7) type = 'core';
      
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: type === 'hub' ? Math.random() * 3 + 5 : type === 'core' ? Math.random() * 2 + 4 : Math.random() * 2 + 2,
        pulse: Math.random() * Math.PI * 2,
        energy: Math.random(),
        type: type,
        brightness: Math.random() * 0.5 + 0.5,
        glowIntensity: Math.random() * 0.8 + 0.2
      });
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw nodes with enhanced visuals
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;
        
        // Boundary collision with smooth wrapping
        if (node.x < -20 || node.x > canvas.width + 20) node.vx *= -1;
        if (node.y < -20 || node.y > canvas.height + 20) node.vy *= -1;
        
        // Keep nodes in bounds with padding
        node.x = Math.max(-10, Math.min(canvas.width + 10, node.x));
        node.y = Math.max(-10, Math.min(canvas.height + 10, node.y));
        
        // Update pulse and energy
        node.pulse += 0.015 + (node.type === 'hub' ? 0.01 : 0);
        node.energy = (Math.sin(node.pulse) + 1) / 2;
        
        // Enhanced node rendering based on type
        const isHub = node.type === 'hub';
        const isCore = node.type === 'core';
        const baseRadius = node.radius;
        const pulseRadius = baseRadius + (node.energy * (isHub ? 6 : isCore ? 4 : 2));
        
        // Outer glow effect
        const outerGlow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, pulseRadius * 2.5);
        if (isHub) {
          outerGlow.addColorStop(0, `rgba(139, 92, 246, ${0.4 * node.energy * node.glowIntensity})`);
          outerGlow.addColorStop(0.3, `rgba(167, 139, 250, ${0.3 * node.energy})`);
          outerGlow.addColorStop(0.6, `rgba(59, 130, 246, ${0.2 * node.energy})`);
          outerGlow.addColorStop(1, 'rgba(139, 92, 246, 0)');
        } else if (isCore) {
          outerGlow.addColorStop(0, `rgba(59, 130, 246, ${0.35 * node.energy * node.glowIntensity})`);
          outerGlow.addColorStop(0.4, `rgba(139, 92, 246, ${0.25 * node.energy})`);
          outerGlow.addColorStop(1, 'rgba(59, 130, 246, 0)');
        } else {
          outerGlow.addColorStop(0, `rgba(167, 139, 250, ${0.25 * node.energy * node.glowIntensity})`);
          outerGlow.addColorStop(0.5, `rgba(139, 92, 246, ${0.15 * node.energy})`);
          outerGlow.addColorStop(1, 'rgba(167, 139, 250, 0)');
        }
        
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        ctx.beginPath();
        ctx.fillStyle = outerGlow;
        ctx.arc(node.x, node.y, pulseRadius * 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        
        // Main node body
        const mainGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, pulseRadius);
        if (isHub) {
          mainGradient.addColorStop(0, `rgba(255, 255, 255, ${0.95 * node.brightness})`);
          mainGradient.addColorStop(0.2, `rgba(139, 92, 246, ${0.9 * node.energy})`);
          mainGradient.addColorStop(0.6, `rgba(59, 130, 246, ${0.7 * node.energy})`);
          mainGradient.addColorStop(1, `rgba(139, 92, 246, ${0.1 * node.energy})`);
        } else if (isCore) {
          mainGradient.addColorStop(0, `rgba(255, 255, 255, ${0.85 * node.brightness})`);
          mainGradient.addColorStop(0.3, `rgba(59, 130, 246, ${0.8 * node.energy})`);
          mainGradient.addColorStop(1, `rgba(139, 92, 246, ${0.1 * node.energy})`);
        } else {
          mainGradient.addColorStop(0, `rgba(255, 255, 255, ${0.7 * node.brightness})`);
          mainGradient.addColorStop(0.4, `rgba(167, 139, 250, ${0.6 * node.energy})`);
          mainGradient.addColorStop(1, `rgba(139, 92, 246, ${0.05 * node.energy})`);
        }
        
        ctx.beginPath();
        ctx.fillStyle = mainGradient;
        ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Sharp inner core
        const coreGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, baseRadius * 0.5);
        coreGradient.addColorStop(0, `rgba(255, 255, 255, ${0.95 + node.energy * 0.05})`);
        coreGradient.addColorStop(0.7, `rgba(255, 255, 255, ${0.8 * node.brightness})`);
        coreGradient.addColorStop(1, `rgba(255, 255, 255, ${0.2 * node.brightness})`);
        
        ctx.beginPath();
        ctx.fillStyle = coreGradient;
        ctx.arc(node.x, node.y, baseRadius * 0.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Special effects for hub nodes
        if (isHub && node.energy > 0.7) {
          // Pulsing ring
          ctx.save();
          ctx.globalCompositeOperation = 'screen';
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 255, 255, ${(node.energy - 0.7) * 2})`;
          ctx.lineWidth = 1 + node.energy;
          ctx.arc(node.x, node.y, baseRadius + 8 + node.energy * 4, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
          
          // Cross sparkle effect
          if (node.energy > 0.9) {
            ctx.save();
            ctx.globalCompositeOperation = 'screen';
            ctx.strokeStyle = `rgba(255, 255, 255, ${node.energy * 0.8})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(node.x - 10, node.y);
            ctx.lineTo(node.x + 10, node.y);
            ctx.moveTo(node.x, node.y - 10);
            ctx.lineTo(node.x, node.y + 10);
            ctx.stroke();
            ctx.restore();
          }
        }
      });
      
            // Enhanced connections with data flow visualization
      connections.length = 0;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Dynamic connection distance based on node types
          let connectionDistance = maxDistance;
          if (nodes[i].type === 'hub' || nodes[j].type === 'hub') {
            connectionDistance = maxDistance * 1.4;
          } else if (nodes[i].type === 'core' || nodes[j].type === 'core') {
            connectionDistance = maxDistance * 1.2;
          }
          
          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.8;
            const energy = (nodes[i].energy + nodes[j].energy) / 2;
            const isHubConnection = nodes[i].type === 'hub' || nodes[j].type === 'hub';
            const isCoreConnection = nodes[i].type === 'core' || nodes[j].type === 'core';
            
            // Enhanced connection line with gradient
            const gradient = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            if (isHubConnection) {
              gradient.addColorStop(0, `rgba(139, 92, 246, ${opacity * (0.6 + energy * 0.4)})`);
              gradient.addColorStop(0.5, `rgba(167, 139, 250, ${opacity * (0.7 + energy * 0.3)})`);
              gradient.addColorStop(1, `rgba(59, 130, 246, ${opacity * (0.6 + energy * 0.4)})`);
            } else if (isCoreConnection) {
              gradient.addColorStop(0, `rgba(59, 130, 246, ${opacity * (0.5 + energy * 0.3)})`);
              gradient.addColorStop(0.5, `rgba(139, 92, 246, ${opacity * (0.6 + energy * 0.2)})`);
              gradient.addColorStop(1, `rgba(59, 130, 246, ${opacity * (0.5 + energy * 0.3)})`);
            } else {
              gradient.addColorStop(0, `rgba(167, 139, 250, ${opacity * (0.4 + energy * 0.3)})`);
              gradient.addColorStop(0.5, `rgba(139, 92, 246, ${opacity * (0.5 + energy * 0.2)})`);
              gradient.addColorStop(1, `rgba(167, 139, 250, ${opacity * (0.4 + energy * 0.3)})`);
            }
            
            ctx.save();
            ctx.globalCompositeOperation = 'screen';
            ctx.beginPath();
            ctx.strokeStyle = gradient;
            ctx.lineWidth = (isHubConnection ? 2.5 : isCoreConnection ? 2 : 1.5) + energy * 0.5;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
            ctx.restore();
            
            // Data flow particles
            if (energy > 0.5) {
              const time = Date.now() * 0.001;
              const flowSpeed = isHubConnection ? 2 : 1.5;
              const pulseProgress = ((time * flowSpeed) % 2);
              
              let particleX, particleY;
              if (pulseProgress <= 1) {
                // Forward flow
                particleX = nodes[i].x + (nodes[j].x - nodes[i].x) * pulseProgress;
                particleY = nodes[i].y + (nodes[j].y - nodes[i].y) * pulseProgress;
              } else {
                // Reverse flow
                const reverseProgress = pulseProgress - 1;
                particleX = nodes[j].x + (nodes[i].x - nodes[j].x) * reverseProgress;
                particleY = nodes[j].y + (nodes[i].y - nodes[j].y) * reverseProgress;
              }
              
              const particleSize = (isHubConnection ? 4 : isCoreConnection ? 3 : 2) * energy;
              
              // Particle glow
              const particleGlow = ctx.createRadialGradient(particleX, particleY, 0, particleX, particleY, particleSize * 2);
              particleGlow.addColorStop(0, `rgba(255, 255, 255, ${energy * 0.9})`);
              particleGlow.addColorStop(0.5, `rgba(139, 92, 246, ${energy * 0.7})`);
              particleGlow.addColorStop(1, 'rgba(139, 92, 246, 0)');
              
              ctx.save();
              ctx.globalCompositeOperation = 'screen';
              ctx.beginPath();
              ctx.fillStyle = particleGlow;
              ctx.arc(particleX, particleY, particleSize * 2, 0, Math.PI * 2);
              ctx.fill();
              
              // Particle core
              ctx.beginPath();
              ctx.fillStyle = `rgba(255, 255, 255, ${energy})`;
              ctx.arc(particleX, particleY, particleSize * 0.5, 0, Math.PI * 2);
              ctx.fill();
              ctx.restore();
            }
          }
        }
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="ai-network-container">
      <canvas
        ref={canvasRef}
        className="ai-network-canvas"
        style={{
          width: "100%",
          height: "100vh",
          background: "transparent",
          borderRadius: "0",
          border: "none"
        }}
      />
    </div>
  );
};

export default AINetworkAnimation;
