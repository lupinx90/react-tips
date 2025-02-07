const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipFormProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>
  tip: number
}

// Para obtener valores de un form -> <+>e.target.value<AsNumber>
export default function TipForm({setTip, tip}:TipFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form>
        {tipOptions.map((tipOption) => (
          <div key={tipOption.id} className="flex gap-2">
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input id={tipOption.id} type="radio" name="tip" value={tipOption.value}
                    onChange={() => setTip(tipOption.value)}
                    checked={tipOption.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
