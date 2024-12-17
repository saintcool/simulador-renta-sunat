import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";
import { TaxField as TaxFieldType } from "../types/tax";

interface TaxFieldProps {
  field: TaxFieldType;
  value: string;
  onChange: (id: string, value: string) => void;
}

export function TaxField({ field, value, onChange }: TaxFieldProps) {
  return (
    <div className="bg-[#2f3555]/50 backdrop-blur-sm rounded-lg border border-white/10 p-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <label htmlFor={field.id} className="text-sm text-gray-200 flex-grow">
          {field.label}
        </label>
        <div className="flex items-center gap-2 shrink-0">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center bg-blue-100 rounded-md h-10 w-[120px] px-2 cursor-pointer hover:bg-blue-200 transition-colors">
                  {field.explanation.length > 0 ? (
                    <InfoIcon className="h-4 w-4 text-black mr-1 shrink-0" />
                  ) : (
                    <div className="h-4 w-4 mr-1"></div>
                  )}
                  <span className="text-sm text-black whitespace-nowrap">
                    Cas. {field.idLabel} :
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-white text-black border border-gray-200 shadow-lg max-w-md">
                <p>{field.explanation}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Input
            id={field.id}
            type="number"
            value={value}
            onChange={(e) => onChange(field.id, e.target.value)}
            readOnly={field.readonly}
            className={`text-right w-48 h-10 ${
              field.readonly
                ? "bg-gray-300 text-gray-900 cursor-not-allowed border-gray-600"
                : "bg-white text-gray-900 border-gray-300 hover:border-gray-400 focus:border-blue-500 focus:ring-blue-500"
            }`}
            step="0.01"
            min="0"
          />
        </div>
      </div>
    </div>
  );
}
