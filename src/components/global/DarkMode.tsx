import React from 'react';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import {BsFillSunFill,BsSun} from "react-icons/bs"


const DarkMode = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
  return (
    <div>
         <ActionIcon
    variant="outline"
    color={dark ? 'yellow' : 'blue'}
    onClick={() => toggleColorScheme()}
    title="Toggle color scheme"
  >
    {dark ? <BsFillSunFill size="1.1rem" /> : <BsSun size="1.1rem" />}
  </ActionIcon>
    </div>
  );
}

export default DarkMode;
