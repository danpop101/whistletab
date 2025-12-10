export type Note = {
  fingers: number[];
  description: string;
};

export type TinWhistleKey = "A" | "D" | "C";
export type TinWhistleKeys = {
  [key in TinWhistleKey]: {
    [note: string]: Note;
  };
};
