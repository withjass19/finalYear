import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

export default function BookCard1(props) {
  return (
    // <Card
    //   isFooterBlurred
    //   radius="lg"
    //   className="border-none"
    // >
    //   <Image
    //     alt="Woman listing to music"
    //     className="object-cover"
    //     height={200}
    //     src="/assets/images/zero-to-one.jpeg"
    //     width={200}
    //   />
    //   <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
    //     <p className="text-tiny text-white/80">Book Name</p>
    //     <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
    //       $2
    //     </Button>
    //   </CardFooter>
    // </Card>
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none w-[185px] h-[273px]"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={615}
        src={props.image}
        width={407}
      />
      <CardFooter className="justify-between  bg-black/25 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        {/* <p className="text-tiny text-white/80">{props.bookName}</p> */}
        <p className="text-tiny text-white/80">More Detail</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
        &#x20B9;{props.amount}
        </Button>
      </CardFooter>
      {/* <CardFooter className="justify-center  bg-black/25 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{props.bookName}</p>
        <Button className="text-white bg-transparent text-sm" variant="flat" color="default" radius="lg" size="sm">
        &#x20B9;{props.amount}
        </Button>
      </CardFooter> */}
    </Card>
  );
}
