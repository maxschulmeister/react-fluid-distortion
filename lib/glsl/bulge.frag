uniform sampler2D tTarget;
uniform vec2 uMouse;
uniform float uRadius;
uniform float uStrength;
uniform vec3 uTintColor;
uniform float uTintIntensity;
uniform float uAspectRatio;
uniform float uInvert;
uniform float uRadial;

// Helper function to create a circle at a specific position with a given radius
// Corrects for aspect ratio to ensure the circle is round
float circle(vec2 uv, vec2 circlePosition, float radius, float aspectRatio) {
    vec2 scaledUV = vec2(uv.x * aspectRatio, uv.y);
    vec2 scaledCirclePos = vec2(circlePosition.x * aspectRatio, circlePosition.y);
    float dist = distance(scaledUV, scaledCirclePos);
    return 1.0 - smoothstep(0.0, radius, dist);
}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec2 mousePos = uMouse * 0.5 + 0.5;
    float bulge = circle(uv, mousePos, uRadius, uAspectRatio);

    // Directional push-away (previous behavior)
    vec2 dir = uv - mousePos;
    vec2 normDir = normalize(dir);
    float signDir = mix(1.0, -1.0, uInvert);
    vec2 dirUv = uv - normDir * bulge * uStrength * 0.15 * signDir;

    // Radial magnification (current behavior)
    float dist = length(dir);
    vec2 normDir2 = dir / (dist + 1e-6);
    float delta = uStrength - 1.0;
    float adjDelta = mix(delta, -delta, uInvert);
    float scale = 1.0 + bulge * adjDelta;
    vec2 radialUv = mousePos + normDir2 * dist * scale;

    // Mix behaviors based on uRadial: 0 = directional, 1 = radial
    vec2 finalUv = mix(dirUv, radialUv, uRadial);

    vec4 sampleColor = texture2D(inputBuffer, finalUv);
    vec4 tintedColor = mix(sampleColor, vec4(uTintColor, 1.0), bulge * uTintIntensity);
    outputColor = tintedColor;
} 