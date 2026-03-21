import styled from "@emotion/styled"
import React, { useState, useCallback } from "react"

const FRAME_SIZE = 64
const TOTAL_FRAMES = 4
const ROW_INDEX = 2 // 3번째 행 (오른쪽 방향), 0-indexed

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
        <div className={`pikachu-wrap ${jumping ? "jump" : ""}`}>
          <div className={`pikachu ${jumping ? "" : "walk"}`} />
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

  .pikachu-wrap {
    position: absolute;
    bottom: 9px;
    left: 50%;
    transform: translateX(-50%);

    &.jump {
      animation: pikachuJump 0.5s ease;
    }
  }

  .pikachu {
    width: ${FRAME_SIZE}px;
    height: ${FRAME_SIZE}px;
    background-image: url('/pikachu_sprite.png');
    background-size: ${FRAME_SIZE * TOTAL_FRAMES}px ${FRAME_SIZE * TOTAL_FRAMES}px;
    background-repeat: no-repeat;
    background-position: 0px -${FRAME_SIZE * ROW_INDEX}px;
    image-rendering: pixelated;

    &.walk {
      animation: pikachuWalk 0.6s steps(${TOTAL_FRAMES}) infinite;
    }
  }

  @keyframes pikachuJump {
    0% { bottom: 9px; }
    40% { bottom: 55px; }
    100% { bottom: 9px; }
  }

  @keyframes pikachuWalk {
    from {
      background-position: 0px -${FRAME_SIZE * ROW_INDEX}px;
    }
    to {
      background-position: -${FRAME_SIZE * TOTAL_FRAMES}px -${FRAME_SIZE * ROW_INDEX}px;
    }
  }
`
