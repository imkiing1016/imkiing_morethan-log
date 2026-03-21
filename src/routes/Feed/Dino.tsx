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
        <div className={`pikachu-wrap ${jumping ? "jump" : ""}`}>
          <div className={`sprite-viewport ${jumping ? "" : "walk"}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/pikachu_sprite.png" alt="pikachu" />
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

  .pikachu-wrap {
    position: absolute;
    bottom: 9px;
    left: 50%;
    transform: translateX(-50%);

    &.jump {
      animation: pikachuJump 0.5s ease;
    }
  }

  .sprite-viewport {
    width: 64px;
    height: 64px;
    overflow: hidden;

    img {
      display: block;
      width: 256px;
      height: 256px;
      object-fit: none;
      object-position: 0px -128px;
      image-rendering: pixelated;
    }

    &.walk img {
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
      object-position: 0px -128px;
    }
    to {
      object-position: -256px -128px;
    }
  }
`
