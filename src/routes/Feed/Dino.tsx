import styled from "@emotion/styled"
import Image from "next/image"
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
        <div className={`dino-wrap ${jumping ? "jump" : ""}`}>
          <div className={`dino-img ${jumping ? "" : "run"}`}>
            <Image src="/dino.png" width={44} height={46} alt="dino" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default Dino

const StyledWrapper = styled.div`
  cursor: pointer;
  user-select: none;

  .scene {
    position: relative;
    width: 100%;
    height: 90px;
    border-radius: 0.75rem;
  }

  .ground {
    position: absolute;
    bottom: 8px;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.gray6};
  }

  .dino-wrap {
    position: absolute;
    bottom: 9px;
    left: 50%;
    transform: translateX(-50%);

    &.jump {
      animation: dinoJump 0.5s ease;
    }
  }

  .dino-img {
    &.run {
      animation: dinoRun 0.3s steps(2) infinite;
    }

    img {
      display: block;
    }
  }

  @keyframes dinoJump {
    0% { bottom: 9px; }
    40% { bottom: 55px; }
    100% { bottom: 9px; }
  }

  @keyframes dinoRun {
    0% { transform: translateY(0); }
    50% { transform: translateY(-2px); }
    100% { transform: translateY(0); }
  }
`
