import React, { useState, useEffect } from "react"
import { Flex, Button, HStack } from '@chakra-ui/react';
import checkDate from "../controller/checkDate";

export default function TestButton() {



  const checkDateHandler = () => {
    const isUpdate = checkDate(1693501500 * 1000)//1696093161
    console.log("▶ ⇛ isUpdate:", isUpdate);
  }
  return (
    <Button
      onClick={() => checkDateHandler()}
    >TestButton</Button>
  )
}
// 169 355 445 87 84 сегодня

// 169 350 116 10 00 вчера