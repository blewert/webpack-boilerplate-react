//
import '@/styles/index.sass'

//Import react
import React from 'react';
import { createRoot } from "react-dom/client";


//----------

//Create root
const root = createRoot(document.getElementById("root"));
root.render(<h1>It's alive!</h1>);