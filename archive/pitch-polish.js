MANUALS.push({
  id: 'pitch-polish', name: 'Pitch Polish', accent: '#e8392f', kind: 'Live autotune',
  tagline: 'Pick a key, sing, sound like you',
  lede: 'Pitch Polish listens to your voice and gently steers each note to the nearest note in your song\'s key. Keep it subtle for natural tuning, or crank it for the robot effect.',
  what: 'Simple live autotune. Pick a key and sing.',
  flow: [['Your voice','vocal mic'],['Pitch tracker','checks every 5 ms'],['Nearest note','in your key and scale',1],['Gentle shift','keeps your tone'],['Mix','tuned with dry']],
  quick: [
    ['Put it first','Add Pitch Polish as the first device on your vocal track.'],
    ['Pick the key','Click the song\'s key and choose Major or Minor. Not sure? Pick Chromatic.'],
    ['Arm and monitor','Arm the track with monitoring on and keep Ableton\'s buffer at 128 samples or lower.'],
    ['Sing','Watch the needle. Pebble sings along when you land on the note.']
  ],
  panel: { w: 680, h: 420, els: [
    ['title',18,38,'PITCH POLISH'],['text',662,36,'22 MS','end'],
    ['card',32,70,208,130,'A',1],['card',248,70,96,130,'4'],
    ['meter',40,208,296,100,2],
    ['pebble',30,322,70,64,3],['text',112,360,'SPOT ON','start',1],
    ['label',376,68,'KEY'],
    ['keys',376,76,286,66,9,4],
    ['label',376,168,'SCALE'],
    ['pills',376,176,286,30,['MAJOR','MINOR','CHROMATIC'],1,5],
    ['slider',376,222,286,40,'NATURAL ↔ ROBOTIC',.25,6],
    ['slider',376,282,286,40,'HUMANISE',.6,7],
    ['slider',376,342,286,40,'MIX',1,8]
  ]},
  legend: [
    ['Note cards','The note it is steering you towards, and its octave.'],
    ['Tuning needle','How far you are from that note. Left is flat, right is sharp, centre is spot on.'],
    ['Pebble and status','Pebble sings when you hit the note. The text tells you what it is doing, like "Nudging you up 12 cents".'],
    ['Key','The root note of your song.'],
    ['Scale','<em>Major</em> or <em>Minor</em> keep you on the notes of that key. <em>Chromatic</em> allows every note, which suits any song.'],
    ['Natural ↔ Robotic','How fast it pulls you onto the note. Left glides gently and sounds human. Right snaps instantly for the hard-tune effect.'],
    ['Humanise','Keeps your vibrato and scoops. High values correct the average pitch of each note and leave the wobble alone.'],
    ['Mix','Tuned voice against dry voice. Leave it at 100% for normal use.']
  ],
  recipes: [
    { name: 'Natural Nudge', for: 'Everyday vocals', hear: 'You, just a touch more confident. Most listeners will never notice it.',
      s: [['Natural ↔ Robotic',.25],['Humanise',.6],['Mix',1]], c: [['Key','A'],['Scale','Minor']],
      play: 'The starting point for any song. Swap the key and scale for your own.' },
    { name: 'Ballad Breath', for: 'Slow songs', hear: 'Long notes settle in tune while your vibrato and slides stay intact.',
      s: [['Natural ↔ Robotic',.12],['Humanise',.85],['Mix',1]], c: [['Scale','Your key']],
      play: 'Great for held notes. If a long note still drifts, nudge Natural ↔ Robotic up a little.' },
    { name: 'Pop Polish', for: 'Upbeat pop', hear: 'Tight, modern, radio-ready pitch with only a hint of the effect.',
      s: [['Natural ↔ Robotic',.45],['Humanise',.35],['Mix',1]], c: [['Scale','Major or Minor']],
      play: 'Sing confidently and keep notes short. Fast runs land cleanly.' },
    { name: 'Hard-tune Hero', for: 'The robot sound', hear: 'The famous stepped, synthetic voice. Every note snaps instantly.',
      s: [['Natural ↔ Robotic',1],['Humanise',0],['Mix',1]], c: [['Scale','Minor']],
      play: 'Slide between notes on purpose. The jumps are the effect.' },
    { name: 'Double Dip', for: 'Thick choruses', hear: 'A tuned copy layered with your real voice, so it sounds like two takes.',
      s: [['Natural ↔ Robotic',.7],['Humanise',.2],['Mix',.5]], c: [['Scale','Your key']],
      play: 'Use it on choruses and backing lines. Pan the track a little for width.' },
    { name: 'Chromatic Catch-all', for: 'Unknown key', hear: 'Light tuning to the nearest semitone. It cannot pull you to a wrong note.',
      s: [['Natural ↔ Robotic',.3],['Humanise',.6],['Mix',1]], c: [['Scale','Chromatic']],
      play: 'A safe setting for jams and when you have not worked out the key yet.' }
  ],
  tips: [
    ['Strange notes?','The key is probably wrong. Check it, or switch to Chromatic.'],
    ['Latency','It adds about 22 ms. Ableton makes up for it on playback. For live monitoring keep the buffer at 128 samples or lower.'],
    ['Singing range','It tracks roughly 90 Hz to 1100 Hz, which covers low male to high female voices.'],
    ['In tune already?','When you are on the note, your voice passes through untouched.']
  ],
  install: 'Download <b>Pitch-Polish-VST3-Windows.zip</b> from the repo\'s Releases page, unzip it and move <code>Pitch Polish.vst3</code> into <code>C:\\Program Files\\Common Files\\VST3</code>. Rescan plug-ins in Ableton.'
});
