import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

type CountDownProps = {
  endDate: string;
  endLabel: string;
};

export default function CountDown({ endDate, endLabel }: CountDownProps) {
  let timeinterval: number;
  const t = useSignal(getTimeRemaining(endDate));

  function getTimeRemaining(endtime: string) {
    const startTime: string = new Date() + "";
    const total = Date.parse(endtime) - Date.parse(startTime);
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function updateCountdown() {
    const update = getTimeRemaining(endDate);
    t.value = update;
    if (t.value.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  useEffect(function initCountdown() {
    updateCountdown();
    timeinterval = setInterval(updateCountdown, 1000);
  }, []);

  return (
    <div class="flex flex-col justify-center py-32 px-8 md:p-32 bg-lime-950 text-white">
      <h1 class="text-center pb-8 text-3xl">{endLabel}</h1>
      <p class="italic text-center pb-8">
        Stake registration for Rendezvous coming soon!
      </p>
      <div class="flex flex-row items-center justify-around text-xl">
        <div class="flex flex-col items-center justify-center">
          <span class="font-bold">{("0" + t.value.days).slice(-2)}</span>
          <span>days</span>
        </div>
        <div class="flex flex-col items-center justify-center">
          <span class="font-bold">{("0" + t.value.hours).slice(-2)}</span>
          <span>hrs</span>
        </div>
        <div class="flex flex-col items-center justify-center">
          <span class="font-bold">{("0" + t.value.minutes).slice(-2)}</span>
          <span>min</span>
        </div>
        <div class="flex flex-col items-center justify-center">
          <span class="font-bold">{("0" + t.value.seconds).slice(-2)}</span>
          <span>sec</span>
        </div>
      </div>
    </div>
  );
}
