// import React, { useEffect, useRef } from 'react';

// /*************  ✨ Windsurf Command ⭐  *************/
// /**
//  * A React component that renders a fuzzy text effect on a canvas element.
//  * It uses the 2D drawing context to create a fuzzy effect on the text.
//  * The component accepts the following props:
//  * - children: The text to be rendered with the fuzzy effect.
//  * - fontSize: The font size of the text.
//  * - fontWeight: The font weight of the text.
//  * - fontFamily: The font family of the text.
//  * - color: The color of the text.
//  * - enableHover: A boolean indicating whether the fuzzy effect should be
//  *   enabled when the user hovers over the text.
//  * - baseIntensity: The intensity of the fuzzy effect when the user is not
//  *   hovering over the text.
//  * - hoverIntensity: The intensity of the fuzzy effect when the user is
//  *   hovering over the text.
//  * The component returns a canvas element with the fuzzy text effect.
//  * The component also provides a cleanup function to cancel the animation
//  * frame and remove the event listeners when the component is unmounted.
//  */
// /*******  59b6b837-9e36-4a89-adc5-8600ebe161d3  *******/
// const FuzzyText = ({
//   children,
//   fontSize = 'clamp(2rem, 10vw, 10rem)',
//   fontWeight = 900,
//   fontFamily = 'inherit',
//   color = '#fff',
//   enableHover = true,
//   baseIntensity = 0.18,
//   hoverIntensity = 0.5
// }) => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     let animationFrameId;
//     let isCancelled = false;
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const init = async () => {
//       if (document.fonts?.ready) {
//         await document.fonts.ready;
//       }
//       if (isCancelled) return;

//       const ctx = canvas.getContext('2d');
//       if (!ctx) return;

//       const computedFontFamily =
//         fontFamily === 'inherit' ? window.getComputedStyle(canvas).fontFamily || 'sans-serif' : fontFamily;

//       const fontSizeStr = typeof fontSize === 'number' ? `${fontSize}px` : fontSize;
//       let numericFontSize;
//       if (typeof fontSize === 'number') {
//         numericFontSize = fontSize;
//       } else {
//         const temp = document.createElement('span');
//         temp.style.fontSize = fontSize;
//         document.body.appendChild(temp);
//         const computedSize = window.getComputedStyle(temp).fontSize;
//         numericFontSize = parseFloat(computedSize);
//         document.body.removeChild(temp);
//       }

//       const text = React.Children.toArray(children).join('');

//       const offscreen = document.createElement('canvas');
//       const offCtx = offscreen.getContext('2d');
//       if (!offCtx) return;

//       offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;
//       offCtx.textBaseline = 'alphabetic';
//       const metrics = offCtx.measureText(text);

//       const actualLeft = metrics.actualBoundingBoxLeft ?? 0;
//       const actualRight = metrics.actualBoundingBoxRight ?? metrics.width;
//       const actualAscent = metrics.actualBoundingBoxAscent ?? numericFontSize;
//       const actualDescent = metrics.actualBoundingBoxDescent ?? numericFontSize * 0.2;

//       const textBoundingWidth = Math.ceil(actualLeft + actualRight);
//       const tightHeight = Math.ceil(actualAscent + actualDescent);

//       const extraWidthBuffer = 10;
//       const offscreenWidth = textBoundingWidth + extraWidthBuffer;

//       offscreen.width = offscreenWidth;
//       offscreen.height = tightHeight;

//       const xOffset = extraWidthBuffer / 2;
//       offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;
//       offCtx.textBaseline = 'alphabetic';
//       offCtx.fillStyle = color;
//       offCtx.fillText(text, xOffset - actualLeft, actualAscent);

//       const horizontalMargin = 50;
//       const verticalMargin = 0;
//       canvas.width = offscreenWidth + horizontalMargin * 2;
//       canvas.height = tightHeight + verticalMargin * 2;
//       ctx.translate(horizontalMargin, verticalMargin);

//       const interactiveLeft = horizontalMargin + xOffset;
//       const interactiveTop = verticalMargin;
//       const interactiveRight = interactiveLeft + textBoundingWidth;
//       const interactiveBottom = interactiveTop + tightHeight;

//       let isHovering = false;
//       const fuzzRange = 30;

//       const run = () => {
//         if (isCancelled) return;
//         ctx.clearRect(
//           -fuzzRange,
//           -fuzzRange,
//           offscreenWidth + 2 * fuzzRange,
//           tightHeight + 2 * fuzzRange
//         );
//         const intensity = isHovering ? hoverIntensity : baseIntensity;
//         for (let j = 0; j < tightHeight; j++) {
//           const dx = Math.floor(intensity * (Math.random() - 0.5) * fuzzRange);
//           ctx.drawImage(offscreen, 0, j, offscreenWidth, 1, dx, j, offscreenWidth, 1);
//         }
//         animationFrameId = window.requestAnimationFrame(run);
//       };

//       run();

//       const isInsideTextArea = (x, y) => {
//         return x >= interactiveLeft && x <= interactiveRight && y >= interactiveTop && y <= interactiveBottom;
//       };

//       const handleMouseMove = e => {
//         if (!enableHover) return;
//         const rect = canvas.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
//         isHovering = isInsideTextArea(x, y);
//       };

//       const handleMouseLeave = () => {
//         isHovering = false;
//       };

//       const handleTouchMove = e => {
//         if (!enableHover) return;
//         e.preventDefault();
//         const rect = canvas.getBoundingClientRect();
//         const touch = e.touches[0];
//         const x = touch.clientX - rect.left;
//         const y = touch.clientY - rect.top;
//         isHovering = isInsideTextArea(x, y);
//       };

//       const handleTouchEnd = () => {
//         isHovering = false;
//       };

//       if (enableHover) {
//         canvas.addEventListener('mousemove', handleMouseMove);
//         canvas.addEventListener('mouseleave', handleMouseLeave);
//         canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
//         canvas.addEventListener('touchend', handleTouchEnd);
//       }

//       const cleanup = () => {
//         window.cancelAnimationFrame(animationFrameId);
//         if (enableHover) {
//           canvas.removeEventListener('mousemove', handleMouseMove);
//           canvas.removeEventListener('mouseleave', handleMouseLeave);
//           canvas.removeEventListener('touchmove', handleTouchMove);
//           canvas.removeEventListener('touchend', handleTouchEnd);
//         }
//       };

//       canvas.cleanupFuzzyText = cleanup;
//     };

//     init();

//     return () => {
//       isCancelled = true;
//       window.cancelAnimationFrame(animationFrameId);
//       if (canvas && canvas.cleanupFuzzyText) {
//         canvas.cleanupFuzzyText();
//       }
//     };
//   }, [children, fontSize, fontWeight, fontFamily, color, enableHover, baseIntensity, hoverIntensity]);

//   return <canvas ref={canvasRef} />;
// };

// export default FuzzyText;
