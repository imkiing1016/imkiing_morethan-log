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
      <div className="card-wrapper">
        <div className="photo-card">
          <div className="photo">
            <Image src={CONFIG.profile.image} fill alt="" />
          </div>
          <div className="card-info">
            <div className="name-badge">
              <span>{CONFIG.profile.name}</span>
            </div>
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

  > .card-wrapper {
    margin-bottom: 2.25rem;

    .photo-card {
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.15),
        0 2px 8px -2px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 16px 32px -6px rgba(0, 0, 0, 0.2),
          0 4px 12px -2px rgba(0, 0, 0, 0.1);
      }

      .photo {
        position: relative;
        width: 100%;
        padding-bottom: 110%;
        background-color: #ffffff;

        img {
          object-fit: cover;
          object-position: center top;
        }
      }

      .card-info {
        padding: 0.875rem 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;
        background-color: #111111;

        .name-badge {
          margin-bottom: 0.25rem;

          span {
            display: inline-block;
            padding: 0.25rem 0.875rem;
            border-radius: 0.5rem;
            font-size: 1.125rem;
            font-weight: 700;
            color: #fff;
            background-color: rgb(234, 88, 12);
            box-shadow: 0 2px 6px rgba(234, 88, 12, 0.3);
          }
        }

        .role {
          font-size: 0.8rem;
          line-height: 1.25rem;
          color: rgba(255, 255, 255, 0.7);
        }

        .bio {
          font-size: 0.8rem;
          line-height: 1.25rem;
          text-align: center;
          color: rgba(255, 255, 255, 0.55);
          margin-bottom: 0.5rem;
        }

        .social {
          display: flex;
          gap: 0.5rem;

          a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.7);
            background-color: rgba(255, 255, 255, 0.1);
            transition: all 0.2s ease;

            &:hover {
              color: rgb(234, 88, 12);
              transform: translateY(-2px);
            }
          }
        }
      }
    }
  }
`
