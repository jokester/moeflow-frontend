import { css } from '@emotion/core';
import classNames from 'classnames';
import React from 'react';
import { FC, Source as ISource } from '@/interfaces';
import style from '@/style';
import { Source } from './Source';

/** 全能模式的属性接口 */
interface ImageSourceViewerGodProps {
  sources: ISource[];
  targetID: string;
  className?: string;
}
/**
 * Overview aka 全能模式
 */
export const ImageSourceViewerGod: FC<ImageSourceViewerGodProps> = ({
  sources,
  targetID,
  className,
}) => {
  return (
    <div
      className={classNames(['ImageSourceViewerGod', className])}
      css={css`
        height: 100%;
        overflow-y: auto;
        .ImageSourceViewerGod__Source {
          display: flex;
          border-bottom: 3px solid ${style.borderColorLight};
          &:first-of-type {
            .Source__TranslaitonList {
              padding-top: 5px;
            }
          }
          &:last-of-type {
            border-bottom: none;
            .Source__TranslaitonList {
              padding-bottom: 5px;
            }
          }
          &.ImageSourceViewerGod__Source--focus {
            background: #fff6f6;
          }
        }
      `}
    >
      {sources.map((source, index) => {
        return (
          <Source
            className="ImageSourceViewerGod__Source"
            source={source}
            prevSource={sources[index - 1]}
            nextSource={sources[index + 1]}
            next2Source={sources[index + 2]}
            targetID={targetID}
            index={index}
            key={source.id}
          />
        );
      })}
    </div>
  );
};
