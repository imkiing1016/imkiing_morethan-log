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
import { MdVerified } from "react-icons/md"

type Props = {}

const ProfileCard: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="title">
        <Emoji>💻</Emoji> Profile
      </div>
      <div className="card">
        <div className="photo-section">
          <Image src={CONFIG.profile.image} fill alt="" />
          <div className="fade" />
        </div>
        <div className="info-section">
          <div className="name">
            {CONFIG.profile.name}
            <MdVerified className="badge" />
          </div>
          <div className="bio">{CONFIG.profile.bio}</div>
          <div className="bottom-row">
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
            <div className="role-tag">{CONFIG.profile.role}</div>
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

  > .card {
    margin-bottom: 2.25rem;
    border-radius: 1.25rem;
    overflow: hidden;
    background: ${({ theme }) =>
      theme.scheme === "light"
        ? "linear-gradient(180deg, #e8ede9 0%, #dfe6e0 100%)"
        : "linear-gradient(180deg, #2a3530 0%, #1e2723 100%)"};
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 28px rgba(0, 0, 0, 0.12);
    }

    .photo-section {
      position: relative;
      width: 100%;
      padding-bottom: 120%;

      img {
        object-fit: cover;
        object-position: center top;
      }

      .fade {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 50%;
        background: ${({ theme }) =>
          theme.scheme === "light"
            ? "linear-gradient(transparent, #dfe6e0)"
            : "linear-gradient(transparent, #1e2723)"};
      }
    }

    .info-section {
      padding: 0 1rem 1.25rem;
      margin-top: -0.5rem;
      position: relative;

      .name {
        display: flex;
        align-items: center;
        gap: 0.375rem;
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 0.375rem;
        color: ${({ theme }) =>
          theme.scheme === "light" ? "#1a1a1a" : "#f0f0f0"};

        .badge {
          color: #3b82f6;
          font-size: 1rem;
        }
      }

      .bio {
        font-size: 0.775rem;
        line-height: 1.3rem;
        color: ${({ theme }) =>
          theme.scheme === "light"
            ? "rgba(0, 0, 0, 0.5)"
            : "rgba(255, 255, 255, 0.5)"};
        margin-bottom: 0.875rem;
      }

      .bottom-row {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .social {
          display: flex;
          gap: 0.375rem;

          a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 1.875rem;
            height: 1.875rem;
            border-radius: 50%;
            font-size: 1rem;
            color: ${({ theme }) =>
              theme.scheme === "light"
                ? "rgba(0, 0, 0, 0.5)"
                : "rgba(255, 255, 255, 0.5)"};
            background-color: ${({ theme }) =>
              theme.scheme === "light"
                ? "rgba(0, 0, 0, 0.06)"
                : "rgba(255, 255, 255, 0.08)"};
            transition: all 0.2s ease;

            &:hover {
              color: ${({ theme }) =>
                theme.scheme === "light" ? "#1a1a1a" : "#f0f0f0"};
              background-color: ${({ theme }) =>
                theme.scheme === "light"
                  ? "rgba(0, 0, 0, 0.1)"
                  : "rgba(255, 255, 255, 0.15)"};
              transform: translateY(-1px);
            }
          }
        }

        .role-tag {
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.3rem 0.75rem;
          border-radius: 9999px;
          color: ${({ theme }) =>
            theme.scheme === "light" ? "#1a1a1a" : "#f0f0f0"};
          background-color: ${({ theme }) =>
            theme.scheme === "light"
              ? "rgba(0, 0, 0, 0.07)"
              : "rgba(255, 255, 255, 0.1)"};
        }
      }
    }
  }
`
