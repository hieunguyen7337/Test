# Volume Five Deep-Research Bootstrap

This is the **canonical lightweight entrypoint** for researching Volume Five of:

**《人在崩坏三，当她们的英雄》 — 黄金森林**  
Common English project title: ***People in Honkai Impact 3rd, Be Their Heroes***

The purpose of this file is to make a fresh research run **fail safely instead of hallucinating** when continuity files or novel prose cannot be accessed.

---

## 0. Absolute rule: source access comes before story generation

**DO NOT begin writing the Volume Five summary until the Source Access Gate below has passed.**

If required sources cannot be retrieved, the correct output is a short **SOURCE ACCESS FAILURE REPORT**, not a reconstructed story.

Never fill inaccessible material from:

- chapter titles alone;
- Honkai canon knowledge;
- model memory;
- machine-translation guesses;
- nearby chapters;
- plausible connective narrative;
- an earlier model-generated recap of these guides.

**No prose = no story claim. No evidence = unresolved.**

---

## 1. Authoritative continuity files

These four full guides are the source of truth for the state entering Volume Five. Retrieve them directly rather than replacing them with a new compressed recap.

1. **Volume One**  
   https://raw.githubusercontent.com/hieunguyen7337/Test/main/volume_1_summary.md

2. **Volume Two**  
   https://raw.githubusercontent.com/hieunguyen7337/Test/main/volume_2_summary.md

3. **Volume Three**  
   https://raw.githubusercontent.com/hieunguyen7337/Test/main/volume_3_summary.md

4. **Volume Four**  
   https://raw.githubusercontent.com/hieunguyen7337/Test/main/volume_4_summary.md

Additional detailed methodology / edge-case reference:

5. **Full Volume-Five research bootstrap**  
   https://raw.githubusercontent.com/hieunguyen7337/Test/main/volume_5_deep_research_bootstrap.md

If a RAW GitHub URL fails, try the equivalent GitHub blob page and web-search the exact repository + filename before declaring failure. Do not silently substitute model memory for an inaccessible guide.

### Context-loading rule

Do **not** paste all four guides into a fresh prompt and then generate a shorter summary of them. That creates a lossy second source of truth.

Instead:

- open the relevant full guide directly when a continuity fact matters;
- revisit the guide whenever uncertain;
- treat the linked guide as higher authority than any temporary notes or recap produced during the research session.

---

## 2. SOURCE ACCESS GATE — mandatory before research

Before producing any Volume-Five narrative, verify all of the following.

### A. Continuity access test

Successfully retrieve **all four** Volume One–Four guides.

In private working notes, record for each guide:

- successful URL/access path;
- one distinctive heading or continuity fact actually read from that file;
- its volume/chapter boundary.

If any of the four guides cannot be read after reasonable alternate-access attempts, **STOP** and return `SOURCE ACCESS FAILURE — CONTINUITY GUIDE UNAVAILABLE` with the failed URL(s). Do not write a Volume-Five summary.

### B. Volume-Five prose access test

Before committing to a full-volume reconstruction, retrieve **actual Chinese prose**, not just directory entries or chapter titles, for at least:

- chapter 386;
- at least one representative middle-volume chapter;
- chapter 527 or the verified final chapter of Volume Five.

Then identify at least one workable Chinese prose source/mirror that can be searched or traversed for the rest of the volume.

If Faloo prose is paywalled/inaccessible, search Chinese mirrors aggressively using exact Chinese title strings, chapter numbers, distinctive phrases, and alternate mirror domains.

Known starting points:

- Faloo directory: https://wap.faloo.com/booklist_1369369.html
- Faloo novel page: https://wap.faloo.com/1369369.html
- TRXS: https://www.trxs.cc/tongren/11463.html
- FFXS: https://m.ffxs8.com/khjj/20662/

Other Chinese mirrors are allowed when necessary. Cross-check numbering/title alignment against Faloo.

If actual prose for the volume cannot be obtained with enough coverage to support a detailed guide, **STOP** and return `SOURCE ACCESS FAILURE — VOLUME FIVE PROSE UNAVAILABLE`. Do not infer the missing story from titles.

### C. Boundary verification

The current handoff expects:

- Volume Four ends at chapter **385**;
- Volume Five = chapters **386–527 inclusive**;
- Volume Six begins at chapter **528**.

Verify this against the official Faloo directory before proceeding. If Faloo disagrees, report the discrepancy and use the verified boundary.

Only after A, B, and C pass may story synthesis begin.

---

## 3. Evidence hierarchy

Use sources in this order:

1. **Faloo official directory/pages** — authoritative for volume headings, chapter numbering, and titles.
2. **Actual Chinese chapter prose** from Faloo or aligned Chinese mirrors — authoritative for story events, dialogue, mechanisms, relationships, powers, rewards, and consequences.
3. **Volume One–Four continuity guides above** — authoritative handoff for prior fanfic continuity.
4. **Later chapters of the same novel** — may resolve ambiguity; label as **later-confirmed** and do not pretend it was stated in Volume Five.
5. **WTR-LAB / machine translations** — navigation or translation aid only.
6. **Honkai canon references** — terminology aid only; never overwrite fanfic-specific continuity.

For uncertain material, distinguish explicitly:

- **Direct Volume-Five fact**
- **Safe inference**
- **Later-confirmed fact**
- **Unresolved / source-bounded**

---

## 4. NO PROSE = NO CLAIM rule

A chapter title may establish only:

- chapter number;
- chapter title;
- a rough navigation/search clue.

A chapter title **cannot by itself establish**:

- what actually happened;
- motivation or causality;
- who won a battle;
- death or survival;
- relationship status;
- confession, engagement, marriage, or rejection;
- power/core/authority acquisition or loss;
- artifact ownership;
- system rewards;
- memory changes;
- faction allegiance;
- identity equivalence;
- timeline effects.

Do not turn suggestive or comedic chapter titles into literal plot events unless the prose confirms them.

---

## 5. Citation gate — mandatory

The final guide must contain inline source citations/links sufficient for another researcher to verify it.

At minimum:

- every major chronological block must cite actual Volume-Five prose;
- every power/core/authority change must cite prose;
- every system reward/trait/upgraded function must cite prose;
- every major relationship-state change must cite prose;
- every death, survival, identity reveal, faction switch, memory alteration, or timeline rewrite must cite prose;
- prior-volume continuity claims should point back to the relevant full continuity guide when material to the conclusion.

**A section that cannot be supported by sources must be marked unresolved or omitted. It must not be completed by invention.**

A generic `Sources:` paragraph at the end is not enough. Citations must be attached to the claims/sections they support.

Before finalizing, perform a citation audit: if a major factual paragraph has no evidence trail, fix it or remove/mark it unresolved.

---

## 6. Continuity firewalls

### Power / asset bookkeeping

Keep distinct at all times:

- bodily Herrscher cores;
- external cores;
- Divine-Key cores;
- full authorities;
- authority fragments;
- residual/system-converted authorities;
- Origin / Finality phenomena;
- stigmata;
- MANTIS / Chimera biology;
- Tianyuan or other special states;
- Divine Keys and ordinary equipment;
- system traits and affinity rewards;
- learned skills;
- temporary transformations;
- branch-only assets;
- constructed bodies / summons.

**Authority access does not automatically mean bodily core ownership. Similar names do not make two mechanics identical.**

### Memory / time / history bookkeeping

Keep distinct:

- ordinary autobiographical memory;
- system-fabricated insertion memories;
- Bai's selective Elysia meta-memory seal;
- reset suppression for others;
- Bai's continuity across resets;
- hyperthymesia;
- Fenghuang Down archives;
- Elysia's sealed reincarnation/loop memories;
- later memory recovery;
- cross-era identity protection;
- branch-Bai memory transfer;
- rewritten-timeline autobiographical updates.

Do not state that characters remember or forget an altered timeline without prose evidence.

### Parallel-world firewall

Volume Four chapters **371–381** concern a paradox-generated compatible parallel Current Era. Do **not** transfer that branch's deaths, loyalties, romances, politics, powers, or experiences to the original Current Era unless Volume Five explicitly propagates them.

### Identity / relationship firewall

Do not collapse distinct people/personas/counterparts, including:

- Sirin vs. K-423's Herrscher of the Void persona;
- biological Kiana vs. K-423;
- Mei vs. Thunder Queen/persona distinctions where the fanfic treats them separately;
- White Seele vs. Dark Seele;
- Previous-Era Xier/Seele counterparts vs. Current-Era Seele;
- branch-world counterparts vs. original-world characters.

For each major relationship, record only what the prose supports: origin, turning point, relationship type, reciprocity, acceptance/consent where relevant, who knows, and end-of-volume state.

---

## 7. Research method

Research Chinese sources first where possible.

Reconstruct causality rather than making an event list:

**starting problem → motivation → mechanism → event → immediate consequence → permanent continuity consequence**

Work arc by arc and chapter range by chapter range. Do not leap from a few sampled chapters to a full-volume claim.

Use later chapters only to resolve ambiguity, and mark that evidence as later-confirmed.

Never normalize the fanfic to official Honkai canon when the fanfic differs.

---

## 8. Required final deliverable

After the Source Access Gate passes, produce a detailed English **Volume Five Full Story and Continuity Guide** containing:

1. exact verified volume boundary and source method;
2. a brief source-access statement naming the prose sources actually used;
3. entering continuity state from Volumes One–Four;
4. concise arc map;
5. causal architecture before the long chronology;
6. full chronological reconstruction with inline citations;
7. battles/interventions and their consequences;
8. Bai Ge body/power/system progression;
9. cores/authorities/Divine Keys/artifact ownership ledger;
10. system rewards, traits, upgrades, and functions;
11. character and relationship end states;
12. faction status entering Volume Six;
13. altered-history / causal rules;
14. system/time/memory/identity mechanics ledger;
15. translation terminology and cautions;
16. direct facts vs safe inference vs later-confirmed vs unresolved limits;
17. end-of-volume continuity ledger for Volume Six;
18. concise synthesis.

The guide should be comprehensive, but **completeness never outranks evidence**.

---

## 9. Final anti-hallucination check

Before submitting, ask:

- Did I actually read Volume-Five prose for every major arc I summarized?
- Can I trace every major factual claim to prose or an authoritative continuity guide?
- Did I accidentally derive events from chapter titles?
- Did I invent connective tissue because a chapter was inaccessible?
- Did I merge identities, powers, cores, memories, timelines, or relationships that the sources keep separate?
- Did I state uncertainty honestly rather than force a complete ledger?
- Are citations attached to the claims they support?

If any answer reveals unsupported synthesis, correct it before submission.

**The required behavior under source failure is to stop and report the failure — never to hallucinate a complete Volume-Five guide.**
