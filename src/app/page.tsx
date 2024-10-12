"use client";
// import src/data/in-game-music.json
import inGameMusic from "~/data/in-game-music.json";
import radioMusic from "~/data/radio-music.json";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Button } from "~/components/ui/button";

const allMusic = [...inGameMusic, ...radioMusic];

export default function Home() {
  const [randomMusic, setRandomMusic] = useState(
    allMusic[Math.floor(Math.random() * allMusic.length)],
  );
  const [opened, setOpened] = useState("");

  if (!randomMusic) {
    // Should actualy never happen
    return <div>Loading...</div>;
  }
  return (
    <>
      <Button
        onClick={() => {
          setOpened("");
          setRandomMusic(allMusic[Math.floor(Math.random() * allMusic.length)]);
        }}
      >
        Random Music
      </Button>

      <audio src={randomMusic.Preview} controls style={{ margin: "100px" }} />

      <a
        href={randomMusic.Preview}
        download
        target="_blank"
        referrerPolicy="no-referrer"
        className="text-blue-500"
      >
        cansao
      </a>

      <Accordion type="single" collapsible value={opened}>
        <AccordionItem value="item-1" onClick={() => setOpened("item-1")}>
          <AccordionTrigger className="">Song</AccordionTrigger>
          <AccordionContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Title</TableHead>
                  <TableHead>Artist</TableHead>
                  <TableHead>Mode</TableHead>
                  <TableHead>Station</TableHead>
                  <TableHead>Pack</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>{randomMusic.Title}</TableCell>
                  <TableCell>{randomMusic.Artist}</TableCell>
                  <TableCell>{randomMusic.Mode ?? "-"}</TableCell>
                  <TableCell>{randomMusic.Station ?? "-"}</TableCell>
                  <TableCell>{randomMusic.Pack}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
