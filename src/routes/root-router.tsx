import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import { Courses } from 'pages/Courses';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Courses />,
  },
]);
