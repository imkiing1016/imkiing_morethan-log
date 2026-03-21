import styled from "@emotion/styled"
import React, { useState, useCallback } from "react"

const PIKACHU_SPRITE = "data:image/png;base64,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"

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
    width: 64px;
    height: 64px;
    background-image: url(${PIKACHU_SPRITE});
    background-size: 256px 256px;
    background-repeat: no-repeat;
    background-position: 0px -128px;
    image-rendering: pixelated;

    &.walk {
      animation: pikachuWalk 0.6s steps(4) infinite;
    }
  }

  @keyframes pikachuJump {
    0% { bottom: 9px; }
    40% { bottom: 55px; }
    100% { bottom: 9px; }
  }

  @keyframes pikachuWalk {
    from {
      background-position: 0px -128px;
    }
    to {
      background-position: -256px -128px;
    }
  }
`
