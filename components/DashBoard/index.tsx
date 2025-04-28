"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function Dashboard() {
  return (
    <Box component="main" className="p-5 bg-gray-100">
      <Container maxWidth="lg">
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Box className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <Typography
              variant="h6"
              className="font-semibold text-gray-700 mb-2"
            >
              Total Users
            </Typography>
            <Typography className="text-2xl font-bold text-blue-600">
              1,245
            </Typography>
          </Box>

          {/* Card 2 */}
          <Box className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <Typography
              variant="h6"
              className="font-semibold text-gray-700 mb-2"
            >
              Active Sessions
            </Typography>
            <Typography className="text-2xl font-bold text-green-600">
              312
            </Typography>
          </Box>

          {/* Card 3 */}
          <Box className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <Typography
              variant="h6"
              className="font-semibold text-gray-700 mb-2"
            >
              Sales Today
            </Typography>
            <Typography className="text-2xl font-bold text-orange-500">
              $7,860
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}