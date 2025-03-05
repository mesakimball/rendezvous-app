import { signal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export default function CountDown({ endDate }: { endDate: string }) {
  let timeinterval: number;
  const remaining = signal;

  function updateCountdown() {
    const t = getTimeRemaining(endDate);
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  useEffect(function initCountdown() {
    timeinterval = setInterval(updateCountdown, 1000);
  });

  return (
    <div class="flex flex-col items-center justify-center">
      <h1>Rendezvous Countdown</h1>
      <div class="flex flex-row items-center justify-center">
        <div class="flex flex-col items-center justify-center">
          <span>days</span>
        </div>
        <div class="flex flex-col items-center justify-center">
          <span>hours</span>
        </div>
        <div class="flex flex-col items-center justify-center">
          <span>minutes</span>
        </div>
        <div class="flex flex-col items-center justify-center">
          <span>seconds</span>
        </div>
      </div>
    </div>
  );
}
