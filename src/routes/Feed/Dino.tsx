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
        <div className={`dino ${jumping ? "jump" : ""}`}>
          {/* head */}
          <div className="head">
            <div className="head-top" />
            <div className="head-bottom" />
            <div className="eye" />
            <div className="mouth" />
          </div>
          {/* body */}
          <div className="neck" />
          <div className="body" />
          <div className="tail-1" />
          <div className="tail-2" />
          <div className="tail-3" />
          {/* arms */}
          <div className="arm-1" />
          <div className="arm-2" />
          {/* legs */}
          <div className="leg-left" />
          <div className="foot-left" />
          <div className="leg-right" />
          <div className="foot-right" />
        </div>
        <div className="ground" />
      </div>
    </StyledWrapper>
  )
}

export default Dino

const PX = 3
const C = "currentColor"

const StyledWrapper = styled.div`
  cursor: pointer;
  user-select: none;
  color: ${({ theme }) =>
    theme.scheme === "light" ? "#535353" : "#a0a0a0"};

  .scene {
    position: relative;
    width: 100%;
    height: 70px;
    overflow: hidden;
    border-radius: 0.75rem;
  }

  .ground {
    position: absolute;
    bottom: 6px;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.gray6};
  }

  .dino {
    position: absolute;
    bottom: 7px;
    left: 50%;
    transform: translateX(-50%);
    width: ${18 * PX}px;
    height: ${18 * PX}px;

    &.jump {
      animation: dinoJump 0.5s ease;
    }
  }

  /* === HEAD === */
  .head-top {
    position: absolute;
    top: 0;
    right: 0;
    width: ${8 * PX}px;
    height: ${3 * PX}px;
    background: ${C};
  }
  .head-bottom {
    position: absolute;
    top: ${3 * PX}px;
    right: ${2 * PX}px;
    width: ${6 * PX}px;
    height: ${2 * PX}px;
    background: ${C};
  }
  .eye {
    position: absolute;
    top: ${1 * PX}px;
    right: ${2 * PX}px;
    width: ${2 * PX}px;
    height: ${PX}px;
    background: ${({ theme }) =>
      theme.scheme === "light" ? "#fff" : "#1a1a1a"};
  }
  .mouth {
    position: absolute;
    top: ${4 * PX}px;
    right: 0;
    width: ${4 * PX}px;
    height: ${PX}px;
    background: ${C};
  }

  /* === NECK + BODY === */
  .neck {
    position: absolute;
    top: ${5 * PX}px;
    right: ${4 * PX}px;
    width: ${4 * PX}px;
    height: ${2 * PX}px;
    background: ${C};
  }
  .body {
    position: absolute;
    top: ${7 * PX}px;
    left: ${4 * PX}px;
    width: ${10 * PX}px;
    height: ${5 * PX}px;
    background: ${C};
  }

  /* === TAIL === */
  .tail-1 {
    position: absolute;
    top: ${6 * PX}px;
    left: ${2 * PX}px;
    width: ${2 * PX}px;
    height: ${3 * PX}px;
    background: ${C};
  }
  .tail-2 {
    position: absolute;
    top: ${5 * PX}px;
    left: ${1 * PX}px;
    width: ${PX}px;
    height: ${2 * PX}px;
    background: ${C};
  }
  .tail-3 {
    position: absolute;
    top: ${4 * PX}px;
    left: 0;
    width: ${PX}px;
    height: ${2 * PX}px;
    background: ${C};
  }

  /* === ARMS === */
  .arm-1 {
    position: absolute;
    top: ${8 * PX}px;
    right: ${2 * PX}px;
    width: ${2 * PX}px;
    height: ${PX}px;
    background: ${C};
  }
  .arm-2 {
    position: absolute;
    top: ${9 * PX}px;
    right: ${1 * PX}px;
    width: ${PX}px;
    height: ${2 * PX}px;
    background: ${C};
  }

  /* === LEGS === */
  .leg-left {
    position: absolute;
    top: ${12 * PX}px;
    left: ${5 * PX}px;
    width: ${2 * PX}px;
    height: ${4 * PX}px;
    background: ${C};
    animation: legLeft 0.2s steps(1) infinite;
  }
  .foot-left {
    position: absolute;
    top: ${16 * PX}px;
    left: ${5 * PX}px;
    width: ${3 * PX}px;
    height: ${PX}px;
    background: ${C};
    animation: footLeft 0.2s steps(1) infinite;
  }
  .leg-right {
    position: absolute;
    top: ${12 * PX}px;
    left: ${10 * PX}px;
    width: ${2 * PX}px;
    height: ${4 * PX}px;
    background: ${C};
    animation: legRight 0.2s steps(1) infinite;
  }
  .foot-right {
    position: absolute;
    top: ${16 * PX}px;
    left: ${10 * PX}px;
    width: ${3 * PX}px;
    height: ${PX}px;
    background: ${C};
    animation: footRight 0.2s steps(1) infinite;
  }

  .dino.jump .leg-left,
  .dino.jump .leg-right {
    animation: none;
    height: ${3 * PX}px;
  }
  .dino.jump .foot-left,
  .dino.jump .foot-right {
    animation: none;
    top: ${15 * PX}px;
  }

  @keyframes dinoJump {
    0% { bottom: 7px; }
    40% { bottom: 48px; }
    100% { bottom: 7px; }
  }

  @keyframes legLeft {
    0% { height: ${4 * PX}px; }
    50% { height: ${2 * PX}px; }
  }
  @keyframes footLeft {
    0% { top: ${16 * PX}px; }
    50% { top: ${14 * PX}px; }
  }
  @keyframes legRight {
    0% { height: ${2 * PX}px; }
    50% { height: ${4 * PX}px; }
  }
  @keyframes footRight {
    0% { top: ${14 * PX}px; }
    50% { top: ${16 * PX}px; }
  }
`
