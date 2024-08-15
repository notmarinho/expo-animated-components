export type StepCounterProps = {
  onNext?: () => void;
  onPrev?: () => void;
  onFinish?: () => void;
  totalSteps: number;
  backLabel?: string;
  nextLabel?: string;
  finishLabel?: string;
};
