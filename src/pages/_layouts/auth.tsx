import { LandPlot } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <LandPlot className="h-5 w-5" />
          <span className="font-semibold">Sportix</span>
        </div>
        <div className="flex h-[800px] w-[800px]">
          <video src="./public/video-teste.mp4" autoPlay muted loop />
        </div>
        <footer className="text-sm">
          &copy; Sportix - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
