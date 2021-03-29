import React from "react";
import { RandomRhythmGenerator } from "./RandomRhythmGenerator";
import "./styles.css";

export default function App() {
  const [time, setTime] = React.useState(0);
  const [BPM, setBPM] = React.useState(40);

  const context = new AudioContext();

  let arr = [];

  const playNote = (soundData) => {
    const buf = new Float32Array(arr.length);

    for (let i = 0; i < arr.length; i++) {
      buf[i] = arr[i];
    }

    const buffer = context.createBuffer(1, buf.length, context.sampleRate);
    buffer.copyToChannel(buf, 0);

    const source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start(0);
  };

  /**
   * Generates a sine waveform.
   *
   * @param {*} sampleNumber
   * @param {*} tone
   */
  const sineWave = (sampleNumber, tone) => {
    const sampleFreq = context.sampleRate / tone;
    return Math.sin(sampleNumber / (sampleFreq / (Math.PI * 2)));
  };

  /**
   * Parses a specified midi number to a corresponding frequency.
   *
   * @param midiNumber the midi number to parse
   */
  const parseMidiToFrequency = (midiNumber) => {
    let a = 440;
    return (a / 32) * 2 ** ((midiNumber - 9) / 12);
  };

  /**
   * Parses the current BPM to a corresponding timeout value.
   */
  const parseBpmToTimeout = () => {
    return (1000 / BPM) * 100;
  };

  const onPlayNote = (midiNumber) => {
    const tone = parseMidiToFrequency(midiNumber);
    arr = [];

    for (var i = 0; i < context.sampleRate * 0.5; i++) {
      arr[i] = sineWave(i, tone) * 1;
    }

    playNote(arr);
  };

  // React.useEffect(() => {
  //   const timer = setTimeout(() => {
  //     onPlayNote(30);
  //     setTime(time + 1);
  //   }, parseBpmToTimeout());
  // });

  console.log(RandomRhythmGenerator());

  return <div className="App"></div>;
}
