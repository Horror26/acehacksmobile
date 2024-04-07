import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type DropdownProps = {
  value?: string;
  onChangeHandler?: () => void;
  data: any;
};

const Dropdown = ({ value, onChangeHandler, data }: DropdownProps) => {
  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Gender" />
      </SelectTrigger>
      <SelectContent>
        {data.length > 0 &&
          data.map(({ id, name }: any) => (
            <SelectItem
              key={id}
              value={name}
              className="select-item p-regular-14"
            >
              {name}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

export default Dropdown;
