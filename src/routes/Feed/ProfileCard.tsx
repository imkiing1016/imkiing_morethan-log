import styled from "@emotion/styled"
import Image from "next/image"
import React from "react"
import { CONFIG } from "site.config"
import { Emoji } from "src/components/Emoji"
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai"

type Props = {}

const ProfileCard: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="title">
        <Emoji>💻</Emoji> Profile
      </div>
      <div className="content">
        <div className="bg-image">
          <Image src={CONFIG.profile.image} fill alt="" />
        </div>
        <div className="overlay" />
        <div className="info-layer">
          <div className="name">{CONFIG.profile.name}</div>
          <div className="role">{CONFIG.profile.role}</div>
          <div className="bio">{CONFIG.profile.bio}</div>
          <div className="social">
            {CONFIG.profile.github && (
              <a
                href={`https://github.com/${CONFIG.profile.github}`}
                rel="noreferrer"
                target="_blank"
                aria-label="GitHub"
              >
                <AiOutlineGithub />
              </a>
            )}
            {CONFIG.profile.email && (
              <a
                href={`mailto:${CONFIG.profile.email}`}
                rel="noreferrer"
                target="_blank"
                aria-label="Email"
              >
                <AiOutlineMail />
              </a>
            )}
            {CONFIG.profile.instagram && (
              <a
                href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
                rel="noreferrer"
                target="_blank"
                aria-label="Instagram"
              >
                <AiOutlineInstagram />
              </a>
            )}
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default ProfileCard

const StyledWrapper = styled.div`
  > .title {
    padding: 0.25rem;
    margin-bottom: 0.75rem;
  }
  > .content {
    position: relative;
    margin-bottom: 2.25rem;
    border-radius: 1rem;
    width: 100%;
    overflow: hidden;
    min-height: 280px;

    .bg-image {
      position: absolute;
      inset: 0;
      opacity: 0.25;

      img {
        object-fit: cover;
        object-position: center;
      }
    }

    .overlay {
      position: absolute;
      inset: 0;
      background: ${({ theme }) =>
        theme.scheme === "light"
          ? "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.85) 100%)"
          : "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.75) 100%)"};
    }

    .info-layer {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      padding: 1.5rem 1rem;
      min-height: 280px;

      .name {
        font-size: 1.5rem;
        line-height: 2rem;
        font-weight: 700;
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
      }
      .role {
        margin-bottom: 0.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: ${({ theme }) => theme.colors.gray11};
      }
      .bio {
        font-size: 0.875rem;
        line-height: 1.25rem;
        text-align: center;
        color: ${({ theme }) => theme.colors.gray10};
        margin-bottom: 1rem;
      }

      .social {
        display: flex;
        gap: 0.75rem;

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 50%;
          font-size: 1.25rem;
          color: ${({ theme }) => theme.colors.gray11};
          background-color: ${({ theme }) =>
            theme.scheme === "light"
              ? "rgba(255, 255, 255, 0.7)"
              : "rgba(255, 255, 255, 0.1)"};
          backdrop-filter: blur(4px);
          transition: all 0.2s ease;

          &:hover {
            color: rgb(234, 88, 12);
            transform: translateY(-2px);
          }
        }
      }
    }
  }
`
