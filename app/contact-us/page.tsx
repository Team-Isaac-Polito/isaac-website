
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { MyNavbar } from "../components/hubjumbo/components";

export default function ContactUs() {
    return (
        <section>
            <MyNavbar darkText={true} />
            <section className="flex gap-6 flex-col min-h-screen block justify-center items-center">
                <h2 className="font-bold text-2xl">Contact us</h2>
                <form className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="title">Titolo</Label>
                        </div>
                        <TextInput id="title" type="title" placeholder="Inserisci il titolo" min={1} required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1">Contenuto messaggio</Label>
                        </div>
                        <TextInput id="password1" type="text" placeholder="Inserisci il messaggio" min={1} required />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <Button type="submit">Invia</Button>
                </form>
            </section>
        </section>
    );
}
