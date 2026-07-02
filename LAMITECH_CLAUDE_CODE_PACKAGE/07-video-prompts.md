# Hero wideo — LAMITECH

## Decyzja

Rekomendowane jest **krótkie hero wideo**, ponieważ subtelny ruch modułów meblowych może wizualnie pokazać ideę dopasowania zabudowy do przestrzeni.

Nie używać magicznego składania mebli z niczego. Film ma wyglądać jak spokojna architektoniczna prezentacja.

## Główny prompt do Gemini

Generate a single 8-second photorealistic cinematic website hero video for a Polish custom furniture workshop. Core idea: “furniture begins with the space.” Show one contemporary, attainable apartment interior with a full-height custom built-in wall precisely fitted between floor, ceiling and side walls.

Begin with the cabinetry mostly closed and the room calm. The camera makes one very slow lateral dolly move from left to right. During the move, one tall panel opens slightly, one internal drawer glides out a short distance and a hidden desk or open niche is revealed. Every movement must be mechanically realistic, slow and restrained. End with the modules returning almost to the opening alignment so the clip can loop smoothly without reversing unnaturally.

Composition: keep the left 40% quiet for a large website headline and CTA. Place the main cabinetry on the right. Eye-level camera, 35 mm full-frame lens character, straight architectural lines, realistic Polish apartment scale.

Materials: warm birch veneer, muted deep-green matte lacquer, bone-white walls, graphite hardware and one tiny orange detail. Lighting: soft natural morning daylight with subtle warm interior light. Mood: calm, precise, architectural, functional, premium without luxury excess.

No people, no text, no logo, no watermark, no brand names, no floating modules, no magical assembly, no impossible hinges, no warped cabinet geometry, no abstract shapes, no futuristic interfaces, no glossy CGI, no dramatic camera move. 16:9, 8 seconds, silent, high-end architectural realism, suitable for seamless website looping.

## Alternatywny prompt do Gemini

Generate a 7-second photorealistic macro-to-medium cinematic sequence focused on custom furniture fit and function. Start with a precise shadow gap between a cabinet panel and wall, move slowly across aligned veneer edges, then reveal a drawer opening smoothly and an interior storage module. Use elegant match cuts based on straight lines and panel edges. End on a vertical cabinet edge that visually matches the first frame for a seamless loop.

Use warm birch, deep ink green, bone white, graphite and a restrained orange accent. Soft side daylight, 60 mm lens character, shallow but controlled depth of field, realistic hardware movement. No text, logos, brands, people, deformed hands, floating parts, impossible mechanics, magic morphing, futuristic graphics or glossy CGI. 16:9, 7 seconds, silent website loop.

## Fallback statyczny

Użyć obrazu `hero-przestrzen-domknieta-meblem-16x9.webp`.

## Object-position

- desktop: `65% 50%`
- tablet: `70% 50%`
- mobile: osobny statyczny kadr 4:5

## Overlay

```css
background: linear-gradient(90deg,
  rgba(23,53,45,.82) 0%,
  rgba(23,53,45,.58) 36%,
  rgba(23,53,45,.12) 72%,
  rgba(23,53,45,.02) 100%);
```

## Wdrożenie

- WebM VP9 lub AV1,
- MP4 H.264 fallback,
- bez dźwięku,
- 1920 × 1080,
- docelowo 2–4 MB,
- maksymalnie 6 MB,
- poster WebP,
- `autoplay muted loop playsinline`,
- mobile i reduced-motion: poster zamiast autoplay.
