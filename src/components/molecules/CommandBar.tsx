import * as React from "react"

import {
  CodepenFill,
  GithubFill,
  DribbbleFill,
  BehanceFill,
  LinkedinFill,
} from "akar-icons"
import { Command } from "cmdk"

import "./CommandBar.scss"

const CommandBar = () => {
  const [open, setOpen] = React.useState(false)

  const loading = false

  React.useEffect(() => {
    const handleKeyDown = (e: React.KeyboardEvent<Window>) => {
      if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
        setOpen(true)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      className="command-dialog"
    >
      <Command.Input className="command-input" />

      <Command.List>
        {loading && <Command.Loading>Hang on…</Command.Loading>}

        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading="Social">
          <Command.Item>
            <div className="command-item">
              <span className="command-item-icon">
                <GithubFill />
              </span>
              <span>Github</span>
            </div>
          </Command.Item>
          <Command.Item>
            <div className="command-item">
              <span className="command-item-icon">
                <CodepenFill />
              </span>
              <span>Codepen</span>
            </div>
          </Command.Item>
          <Command.Separator />
          <Command.Item>
            <div className="command-item">
              <span className="command-item-icon">
                <DribbbleFill />
              </span>
              <span>Dribbble</span>
            </div>
          </Command.Item>
          <Command.Item>
            <div className="command-item">
              <span className="command-item-icon">
                <BehanceFill />
              </span>
              <span>Behance</span>
            </div>
          </Command.Item>
          <Command.Item>
            <div className="command-item">
              <span className="command-item-icon">
                <LinkedinFill />
              </span>
              <span>Linkedn</span>
            </div>
          </Command.Item>
        </Command.Group>

        <Command.Item>Work</Command.Item>
      </Command.List>
    </Command.Dialog>
  )
}

export default CommandBar
