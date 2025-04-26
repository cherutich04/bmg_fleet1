"use client"

import { useEffect, useRef } from "react"

interface SparklineProps {
  data: number[]
  color?: string
  width?: number
  height?: number
}

export function Sparkline({ data, color = "#1E40AF", width = 100, height = 30 }: SparklineProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !data.length) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Set up dimensions
    const padding = 2
    const chartWidth = canvas.width - padding * 2
    const chartHeight = canvas.height - padding * 2

    // Find min and max values
    const minValue = Math.min(...data)
    const maxValue = Math.max(...data)
    const valueRange = maxValue - minValue

    // Calculate x and y positions
    const xStep = chartWidth / (data.length - 1)
    const points = data.map((value, index) => ({
      x: padding + index * xStep,
      y: padding + chartHeight - ((value - minValue) / valueRange) * chartHeight,
    }))

    // Draw line
    ctx.beginPath()
    ctx.moveTo(points[0].x, points[0].y)

    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y)
    }

    ctx.strokeStyle = color
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw area under the line
    ctx.lineTo(points[points.length - 1].x, canvas.height - padding)
    ctx.lineTo(points[0].x, canvas.height - padding)
    ctx.closePath()

    ctx.fillStyle = `${color}20` // 20% opacity
    ctx.fill()
  }, [data, color])

  return <canvas ref={canvasRef} width={width} height={height} className="w-full h-full" />
}

