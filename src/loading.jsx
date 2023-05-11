import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './page/homepage/homepage.jsx';
import Work from './page/work/work.jsx';
import Contact from './page/contact/contact.jsx';
import Language from './component/main/skills/language';
import Tool from './component/main/skills/tools';
import AllSkill from './component/main/skills/allSkill';
import Backend from './component/main/skills/backend';
import Frontend from './component/main/skills/frontend';
import Other from './component/main/skills/other.jsx';
function Loading() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Homepage />} />
                <Route path="/work" element={<Work />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/" element={<AllSkill />} />
                <Route path="/language" element={<Language />} />
                <Route path="/frontend" element={<Frontend />} />
                <Route path="/backend" element={<Backend />} />
                <Route path="/tools" element={<Tool />} />
                <Route path="/other" element={<Other />} />
            </Routes>
        </Router>
    );
}

export default Loading;
