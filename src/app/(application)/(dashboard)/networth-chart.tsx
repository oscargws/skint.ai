"use client";

import * as React from "react";
import { Area, AreaChart, XAxis } from "recharts";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const chartData = [
  { date: "2024-04-01", cash: 22200, property: 150000 },
  { date: "2024-04-02", cash: 19700, property: 150000 },
  { date: "2024-04-03", cash: 16700, property: 150000 },
  { date: "2024-04-04", cash: 24200, property: 152000 },
  { date: "2024-04-05", cash: 27300, property: 152000 },
  { date: "2024-04-06", cash: 30100, property: 152000 },
  { date: "2024-04-07", cash: 24500, property: 152000 },
  { date: "2024-04-08", cash: 29400, property: 152000 },
  { date: "2024-04-09", cash: 25900, property: 152000 },
  { date: "2024-04-10", cash: 26100, property: 152000 },
  { date: "2024-04-11", cash: 27300, property: 155000 },
  { date: "2024-04-12", cash: 29200, property: 155000 },
  { date: "2024-04-13", cash: 32400, property: 155000 },
  { date: "2024-04-14", cash: 33700, property: 155000 },
  { date: "2024-04-15", cash: 32000, property: 155000 },
  { date: "2024-04-16", cash: 33800, property: 155000 },
  { date: "2024-04-17", cash: 34600, property: 155000 },
  { date: "2024-04-18", cash: 36400, property: 155000 },
  { date: "2024-04-19", cash: 34300, property: 155000 },
  { date: "2024-04-20", cash: 28900, property: 155000 },
  { date: "2024-04-21", cash: 27300, property: 155000 },
  { date: "2024-04-22", cash: 22400, property: 155000 },
  { date: "2024-04-23", cash: 23800, property: 155000 },
  { date: "2024-04-24", cash: 28700, property: 158000 },
  { date: "2024-04-25", cash: 31500, property: 158000 },
  { date: "2024-04-26", cash: 27500, property: 158000 },
  { date: "2024-04-27", cash: 28300, property: 158000 },
  { date: "2024-04-28", cash: 32200, property: 158000 },
  { date: "2024-04-29", cash: 31500, property: 158000 },
  { date: "2024-04-30", cash: 35400, property: 158000 },
  { date: "2024-05-01", cash: 36500, property: 158000 },
  { date: "2024-05-02", cash: 39300, property: 158000 },
  { date: "2024-05-03", cash: 37400, property: 158000 },
  { date: "2024-05-04", cash: 38500, property: 160000 },
  { date: "2024-05-05", cash: 38100, property: 160000 },
  { date: "2024-05-06", cash: 39800, property: 160000 },
  { date: "2024-05-07", cash: 38800, property: 160000 },
  { date: "2024-05-08", cash: 34900, property: 160000 },
  { date: "2024-05-09", cash: 32700, property: 160000 },
  { date: "2024-05-10", cash: 29300, property: 160000 },
  { date: "2024-05-11", cash: 33500, property: 160000 },
  { date: "2024-05-12", cash: 39700, property: 160000 },
  { date: "2024-05-13", cash: 39700, property: 160000 },
  { date: "2024-05-14", cash: 44800, property: 162000 },
  { date: "2024-05-15", cash: 47300, property: 162000 },
  { date: "2024-05-16", cash: 43800, property: 162000 },
  { date: "2024-05-17", cash: 49900, property: 162000 },
  { date: "2024-05-18", cash: 51500, property: 162000 },
  { date: "2024-05-19", cash: 53500, property: 162000 },
  { date: "2024-05-20", cash: 57700, property: 162000 },
  { date: "2024-05-21", cash: 58200, property: 162000 },
  { date: "2024-05-22", cash: 58100, property: 162000 },
  { date: "2024-05-23", cash: 55200, property: 165000 },
  { date: "2024-05-24", cash: 54400, property: 165000 },
  { date: "2024-05-25", cash: 50100, property: 165000 },
  { date: "2024-05-26", cash: 51300, property: 165000 },
  { date: "2024-05-27", cash: 52000, property: 165000 },
  { date: "2024-05-28", cash: 53300, property: 165000 },
  { date: "2024-05-29", cash: 57800, property: 165000 },
  { date: "2024-05-30", cash: 54000, property: 165000 },
  { date: "2024-05-31", cash: 57800, property: 165000 },
  { date: "2024-06-01", cash: 57800, property: 165000 },
  { date: "2024-06-02", cash: 57000, property: 168000 },
  { date: "2024-06-03", cash: 60300, property: 168000 },
  { date: "2024-06-04", cash: 63900, property: 168000 },
  { date: "2024-06-05", cash: 68800, property: 168000 },
  { date: "2024-06-06", cash: 69400, property: 168000 },
  { date: "2024-06-07", cash: 72300, property: 168000 },
  { date: "2024-06-08", cash: 78500, property: 168000 },
  { date: "2024-06-09", cash: 83800, property: 168000 },
  { date: "2024-06-10", cash: 85500, property: 168000 },
  { date: "2024-06-11", cash: 89200, property: 170000 },
  { date: "2024-06-12", cash: 92200, property: 170000 },
  { date: "2024-06-13", cash: 88100, property: 170000 },
  { date: "2024-06-14", cash: 92600, property: 170000 },
  { date: "2024-06-15", cash: 90700, property: 170000 },
  { date: "2024-06-16", cash: 87100, property: 170000 },
  { date: "2024-06-17", cash: 87500, property: 170000 },
  { date: "2024-06-18", cash: 90700, property: 170000 },
  { date: "2024-06-19", cash: 94100, property: 170000 },
  { date: "2024-06-20", cash: 94800, property: 172000 },
  { date: "2024-06-21", cash: 96900, property: 172000 },
  { date: "2024-06-22", cash: 97700, property: 172000 },
  { date: "2024-06-23", cash: 98000, property: 172000 },
  { date: "2024-06-24", cash: 93200, property: 172000 },
  { date: "2024-06-25", cash: 94100, property: 172000 },
  { date: "2024-06-26", cash: 94300, property: 172000 },
  { date: "2024-06-27", cash: 94800, property: 172000 },
  { date: "2024-06-28", cash: 94900, property: 172000 },
  { date: "2024-06-29", cash: 90300, property: 172000 },
  { date: "2024-06-30", cash: 94600, property: 175000 },
];

const chartConfig = {
  networth: {
    label: "Net Worth",
  },
  cash: {
    label: "Cash",
    color: "lightgreen",
  },
  property: {
    label: "Property",
    color: "lightblue",
  },
} satisfies ChartConfig;

export function NetworthChart() {
  const [timeRange, setTimeRange] = React.useState("1M");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "1M") {
      daysToSubtract = 30;
    } else if (timeRange === "7D") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  // Calculate current total net worth
  const currentTotal = React.useMemo(() => {
    const latest = chartData[chartData.length - 1];
    return latest.cash + latest.property;
  }, []);

  // Calculate month-over-month change
  const monthChange = React.useMemo(() => {
    const currentDate = new Date("2024-06-30");
    const lastMonth = new Date("2024-06-30");
    lastMonth.setMonth(lastMonth.getMonth() - 1);

    const current = chartData[chartData.length - 1];
    const previous =
      chartData.find(
        (item) => new Date(item.date).getTime() === lastMonth.getTime()
      ) || chartData[0];

    const currentTotal = current.cash + current.property;
    const previousTotal = previous.cash + previous.property;

    const change = currentTotal - previousTotal;
    const percentChange = (change / previousTotal) * 100;

    return {
      amount: change,
      percentage: percentChange,
    };
  }, []);

  return (
    <Card className="col-span-2">
      <CardHeader className="space-y-3 py-6">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-normal text-muted-foreground">
            Net Worth
          </h3>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="h-8 w-[70px] rounded-full border-0 bg-secondary px-3 text-xs"
              aria-label="Select time range"
            >
              <SelectValue placeholder="1M" />
            </SelectTrigger>
            <SelectContent className="rounded-lg">
              <SelectItem value="3M" className="rounded-md text-sm">
                3M
              </SelectItem>
              <SelectItem value="1M" className="rounded-md text-sm">
                1M
              </SelectItem>
              <SelectItem value="7D" className="rounded-md text-sm">
                7D
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1">
          <div className="text-3xl font-semibold tracking-tight">
            $
            {currentTotal.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
          <div className="flex items-center gap-1.5">
            <span
              className={
                monthChange.amount >= 0 ? "text-green-500" : "text-red-500"
              }
            >
              {monthChange.amount >= 0 ? "+" : "-"}$
              {Math.abs(monthChange.amount).toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{" "}
              ({monthChange.amount >= 0 ? "+" : "-"}
              {Math.abs(monthChange.percentage).toFixed(1)}%)
            </span>
            <span className="text-sm text-muted-foreground">vs last month</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0 p-0">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillCash" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-cash)"
                  stopOpacity={0.7}
                />
                <stop
                  offset="55%"
                  stopColor="var(--color-cash)"
                  stopOpacity={0.0}
                />
              </linearGradient>
              <linearGradient id="fillProperty" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-property)"
                  stopOpacity={0.7}
                />
                <stop
                  offset="55%"
                  stopColor="var(--color-property)"
                  stopOpacity={0.0}
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  formatter={(value) => {
                    return `$${value.toLocaleString()}`;
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="property"
              type="linear"
              fill="url(#fillProperty)"
              stroke="var(--color-property)"
              strokeWidth={2}
              stackId="a"
            />
            <Area
              dataKey="cash"
              type="linear"
              fill="url(#fillCash)"
              stroke="var(--color-cash)"
              strokeWidth={2}
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
