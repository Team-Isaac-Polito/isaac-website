import { Button } from "flowbite-react";

export function IsaacButton({text}: {text: string}){
    return (
        <Button className="w-full max-w-80 cursor-pointer" style={{backgroundColor: "#549697"}}>{text}</Button>
    )
}