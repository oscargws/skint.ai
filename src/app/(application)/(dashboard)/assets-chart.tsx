"use client";

import * as React from "react";
import { TrendingDown, TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { category: "cash", value: 45000, fill: "var(--color-cash)" },
  { category: "investments", value: 125000, fill: "var(--color-investments)" },
  { category: "realEstate", value: 320000, fill: "var(--color-realEstate)" },
  { category: "retirement", value: 98000, fill: "var(--color-retirement)" },
  { category: "other", value: 32000, fill: "var(--color-other)" },
];

const chartConfig = {
  value: {
    label: "Value",
  },
  cash: {
    label: "Cash",
    color: "hsl(var(--chart-1))",
  },
  investments: {
    label: "Investments",
    color: "hsl(var(--chart-2))",
  },
  realEstate: {
    label: "Real Estate",
    color: "hsl(var(--chart-3))",
  },
  retirement: {
    label: "Retirement",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function AssetsChart() {
  const totalNetWorth = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="space-y-3 py-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-normal text-muted-foreground">Assets</h3>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="m-auto aspect-square">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="category"
              innerRadius={75}
              strokeWidth={2}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-xl"
                        >
                          ${totalNetWorth.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 20}
                          className="fill-muted-foreground text-sm"
                        >
                          Total Assets
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
