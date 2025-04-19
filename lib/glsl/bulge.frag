uniform sampler2D tTarget;
uniform vec2 uMouse;
uniform float uRadius;
uniform float uStrength;
uniform vec3 uTintColor;
uniform float uTintIntensity;
uniform float uAspectRatio;
uniform float uInvert;

// Helper function to create a circle at a specific position with a given radius
// Corrects for aspect ratio to ensure the circle is round
float circle(vec2 uv, vec2 circlePosition, float radius, float aspectRatio) {
    // Scale the coordinates based on the aspect ratio
    // We multiply the x-coordinate by the aspect ratio to make the coordinate system square
    vec2 scaledUV = vec2(uv.x * aspectRatio, uv.y);
    vec2 scaledCirclePos = vec2(circlePosition.x * aspectRatio, circlePosition.y);
    
    float dist = distance(scaledUV, scaledCirclePos);
    return 1.0 - smoothstep(0.0, radius, dist);
}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    // Calculate the mouse position in UV space (0-1)
    vec2 mousePos = uMouse * 0.5 + 0.5;
    
    // Create the bulge effect, passing the aspect ratio for correction
    float bulge = circle(uv, mousePos, uRadius, uAspectRatio);
    
    // Calculate the distortion direction (from the center of the bulge)
    vec2 direction = normalize(uv - mousePos);
    
    // Apply the distortion to the UV coordinates - push pixels away from mouse
    float sign = mix(1.0, -1.0, uInvert);
    vec2 distortedUv = uv - direction * bulge * uStrength * 0.15 * sign;
    
    // Sample the input texture with the distorted coordinates
    vec4 distortedColor = texture2D(inputBuffer, distortedUv);
    
    // Add a subtle color tint to make the effect more visible
    vec4 tintedColor = mix(distortedColor, vec4(uTintColor, 1.0), bulge * uTintIntensity);
    
    // Output the final color
    outputColor = tintedColor;
} 