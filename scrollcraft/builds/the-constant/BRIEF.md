# The Constant — brief

Theta Sound / `/the-constant`. Built inside the existing Next.js app (React +
Framer Motion), not as a standalone scroll-craft static export — confirmed with
the user (see "Architecture" decision below). Illustrated/motion-graphic world,
no generated photography — confirmed with the user (no product exists yet to
photograph, no KIE_AI_API_KEY / spend authorized).

## 1. Vibe + references
Quiet, steady, warm, deliberate. References (non-site): the eye of a hurricane
(calm center, chaos at the edges); a lighthouse beam holding steady in a storm;
Dieter Rams' "as little design as possible."

## 2. Scroll journey (visitor's words → beats)
1. Recognition — they land on the split: everything loud on one side, one thing
   quiet on the other.
2. Tension — scrolling forward through the morning, the loud side dominates and
   keeps naming specific chaos (unread mail, moved meetings, flagged expenses).
3. Turn — early evening: the loud side visibly starts losing ground.
4. Substance — the quiet side never changed the whole time. That's the point,
   made visible by contrast rather than stated.
5. Range — the divider itself is a handle; the visitor can grab it and move
   through the day themselves, not just watch it happen.
6. Commitment — the loud side is gone. One line, one link back.

## 3. Energy curve
High at the open (both sides shouting for attention), climbing through late
morning (peak clutter), then a sustained decline through the afternoon into a
fully quiet close. One direction, no rebound — matches "a balance tipping."

## 4. Feeling curve + peak
```
1  Recognition   the split itself: two sides, unmistakably different tempers
2  Overwhelm     the loud side's cards multiply, named specifically (47 unread, meetings moved)
3  Fatigue       midday: still loud, but the visitor has stopped being surprised by it
4  Relief        the loud side visibly shrinks, cards start disappearing
5  Release       [PEAK] the loud side collapses to almost nothing in one continuous motion
6  Calm          the quiet side holds the full frame, alone, resolved
```

**Peak, as the visitor would say it:** "the loud side just kept shrinking as I
scrolled until it was gone, and the one thing that never moved was still
sitting there."

**Tell-someone sentence:** "It's the site where you scroll through a whole day
and watch one side of the screen lose."

## 5. Signature move
Scroll itself gets physically heavier during the loud hours and lighter at
night — not just visuals responding to scroll position, but the scroll
response itself lagging (a tuned lerp/damping factor tied to the current chaos
level) so the page resists the visitor's hand during the noisy stretch and
glides freely once it's quiet. The divider is also a direct-drag handle (grab
and move through the day yourself), giving the "Range" beat real agency rather
than pure spectator scroll.

## 6. Aesthetic range
Premium-minimal, warmed by the Fraunces italic display serif and Theta's
existing red accent — not luxury-cold, closer to "considered and human."

## 7. World
Distinct scenes (six authored time-of-day anchor points), continuously
interpolated by scroll position rather than hard-cut between — matches Split
Stage's "resolved by scroll" requirement, not a worldflight (no real
geography/place to travel through).

## 8. Assets
None available; nothing generated. Built from typography, color, lucide icons,
and motion only.

## Grammar
**Split Stage.** Two columns held in tension the whole page (loud / quiet),
resolved by the scroll position tipping the balance. Genuinely fits — this is
an actual before/after argument, not a single linear product story (which
would have been Filmic one-shot, the default every prior scroll-craft build
reached for). Continuous world was rejected: no real geography. Typographic
poster was rejected: it explicitly bans cards, and the floating task-cards are
central to this brief. Live surface, Gallery, Chaptered editorial, and
Rhythmic cutlist don't fit an argument with exactly two sides.

## Authored silence
None authored as a distinct beat — the "Calm" ending state itself functions as
the silence, held with the largest span on the page per the peak's aftermath
requirement.

## Fingerprint gate
Registry not yet started for this workspace (fresh, single integrated build,
not part of a multi-site collection) — noted rather than gated, since this is
one bespoke build inside an existing product, not one of a series.
