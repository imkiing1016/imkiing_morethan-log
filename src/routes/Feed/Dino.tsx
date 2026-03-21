import styled from "@emotion/styled"
import React, { useState, useCallback } from "react"

const Dino: React.FC = () => {
  const [jumping, setJumping] = useState(false)

  const handleClick = useCallback(() => {
    if (jumping) return
    setJumping(true)
    setTimeout(() => setJumping(false), 500)
  }, [jumping])

  return (
    <StyledWrapper onClick={handleClick}>
      <div className="scene">
        <div className="ground" />
        <div className={`dino ${jumping ? "jump" : ""}`}>
          <div className="head">
            <div className="eye" />
          </div>
          <div className="body" />
          <div className="tail" />
          <div className="leg-left" />
          <div className="leg-right" />
          <div className="arm" />
        </div>
      </div>
    </StyledWrapper>
  )
}

export default Dino

const StyledWrapper = styled.div`
  cursor: pointer;
  margin-bottom: 1rem;
  user-select: none;

  .scene {
    position: relative;
    width: 100%;
    height: 80px;
    overflow: hidden;
    border-radius: 0.75rem;
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "#f9fafb" : "rgba(255,255,255,0.03)"};
  }

  .ground {
    position: absolute;
    bottom: 12px;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.gray6};
  }

  .dino {
    position: absolute;
    bottom: 13px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 34px;
    transition: bottom 0.15s ease-out;

    &.jump {
      animation: dinoJump 0.5s ease;
    }
  }

  /* head */
  .head {
    position: absolute;
    top: 0;
    right: 0;
    width: 16px;
    height: 14px;
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "#525252" : "#a3a3a3"};
    border-radius: 2px 2px 2px 0;
  }

  .eye {
    position: absolute;
    top: 3px;
    right: 3px;
    width: 3px;
    height: 3px;
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "#fafafa" : "#1a1a1a"};
    border-radius: 1px;
  }

  /* body */
  .body {
    position: absolute;
    top: 10px;
    left: 4px;
    width: 20px;
    height: 16px;
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "#525252" : "#a3a3a3"};
    border-radius: 2px;
  }

  /* tail */
  .tail {
    position: absolute;
    top: 8px;
    left: 0;
    width: 8px;
    height: 6px;
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "#525252" : "#a3a3a3"};
    border-radius: 1px;
  }

  /* arm */
  .arm {
    position: absolute;
    top: 18px;
    right: 4px;
    width: 3px;
    height: 6px;
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "#525252" : "#a3a3a3"};
    border-radius: 1px;
  }

  /* legs */
  .leg-left,
  .leg-right {
    position: absolute;
    bottom: 0;
    width: 4px;
    height: 10px;
    background-color: ${({ theme }) =>
      theme.scheme === "light" ? "#525252" : "#a3a3a3"};
    border-radius: 1px;
  }

  .leg-left {
    left: 8px;
    animation: legRunLeft 0.2s steps(1) infinite;
  }

  .leg-right {
    left: 16px;
    animation: legRunRight 0.2s steps(1) infinite;
  }

  .dino.jump .leg-left,
  .dino.jump .leg-right {
    animation: none;
    height: 8px;
  }

  @keyframes dinoJump {
    0% { bottom: 13px; }
    40% { bottom: 50px; }
    100% { bottom: 13px; }
  }

  @keyframes legRunLeft {
    0% { height: 10px; bottom: 0; }
    50% { height: 6px; bottom: 4px; }
  }

  @keyframes legRunRight {
    0% { height: 6px; bottom: 4px; }
    50% { height: 10px; bottom: 0; }
  }
`
