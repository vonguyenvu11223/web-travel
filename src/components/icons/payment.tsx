type Props = {
  className?: string;
};
const IconCreditCarDefault = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes('w-') ? className : `w-6 h-6 ${className}`
      } block `}>
      <svg viewBox="0 0 40 26" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m30.19 21.18h-20.19a1.87 1.87 0 0 1 -1.9-1.85v-12.33a1.88 1.88 0 0 1 1.9-1.82h20.2a1.88 1.88 0 0 1 1.89 1.82v12.3a1.88 1.88 0 0 1 -1.9 1.88z"
          fill="#212121"
          fillRule="evenodd"
        />
        <g fill="#fff">
          <rect height="2" rx=".5" width="5" x="25.09" y="17.18" />
          <path d="m8.09 12.18h24v-3h-24z" fillRule="evenodd" />
        </g>
      </svg>
    </span>
  );
};

const IconCardAmex = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes('w-') ? className : `w-6 h-6 ${className}`
      } block `}>
      <svg
        viewBox="0 0 40 26"
        xmlns="http://www.w3.org/2000/svg"
        style={{ borderRadius: '5px' }}>
        <path
          d="m0 26h40v-26h-40z"
          fill="#016fd0"
          style={{ borderRadius: '5px' }}
        />
        <path
          d="m30.71 13.64v1.64h-4.17v1.14h4.07v1.64h-4.07v1.12h4.17v1.66l3.38-3.6zm-1.1-6.14-1.4-3.19h-4l-4.1 9.32h3.33v8.27h10.28l1.61-1.8 1.67 1.81h3v-2.63l-1.9-2.06 1.92-2v-2.64h-1.93v-5l-1.81 5h-1.76l-1.86-5v5h-4.2l-.6-1.46h-3.3l-.56 1.47h-2.26l3.26-7.27h2.55l3.19 7.21v-7.22h3.1l1.6 4.47 1.56-4.47h3v-1h-3.75l-.85 2.39-.85-2.39h-4.94zm-5.06 6.11v7.27h8.7l2.1-2.32 2.12 2.32h2.53v-.1l-3.34-3.53 3.34-3.59v-.05h-2.5l-2.1 2.3-2.08-2.3zm.7-4.11 1-2.31 1 2.31z"
          fill="#fff"
          fillRule="evenodd"
          style={{ borderRadius: '5px' }}
        />
      </svg>
    </span>
  );
};

const IconCardDiscover = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes('w-') ? className : `w-6 h-6 ${className}`
      } block `}>
      <svg viewBox="0 0 40 26" xmlns="http://www.w3.org/2000/svg">
        <path d="m2.39 14.92s2.48.3 2.48-2-2.48-2-2.48-2zm-1.19-4.92h2a3 3 0 0 1 0 5.95h-2z" />
        <path d="m7.75 10h-1.2v6h1.2z" />
        <path
          d="m11.51 11.35a1.33 1.33 0 0 0 -.89-.5.78.78 0 0 0 -.79.6c0 .29 0 .39.79.69s1.89.5 1.89 1.88a2 2 0 0 1 -2 2 2.64 2.64 0 0 1 -2.18-1.09l.79-.8a1.74 1.74 0 0 0 1.29.8.8.8 0 0 0 .9-.8c0-.29-.2-.59-.7-.79s-1.88-.4-1.88-1.69a1.74 1.74 0 0 1 1.88-1.78 3 3 0 0 1 1.69.69z"
          fillRule="evenodd"
        />
        <path
          d="m17.27 11.64a2.15 2.15 0 0 0 -1.49-.64 2.09 2.09 0 0 0 0 4.17 2.12 2.12 0 0 0 1.49-.7v1.39a3.31 3.31 0 0 1 -1.49.4 3.18 3.18 0 0 1 0-6.35 2.79 2.79 0 0 1 1.49.4z"
          fillRule="evenodd"
        />
        <path d="m23.81 10h1.29l1.69 4 1.59-4h1.29l-2.58 6.15h-.7z" />
        <path d="m35.32 11v1.79h.68a.86.86 0 0 0 .8-.8v-.1a.79.79 0 0 0 -.8-.79h-.69zm-1.09-1h2a1.76 1.76 0 0 1 1.89 1.78 1.72 1.72 0 0 1 -1.29 1.69l1.78 2.48h-1.5l-1.59-2.38h-.1v2.38h-1.19z" />
        <path d="m33.34 12.34v1.09h-2.09v1.49h2.18v1.08h-3.37v-6h3.37v1.09h-2.18v1.29z" />
        <path
          d="m20.94 16.11a3.08 3.08 0 1 0 -3.08-3.11 3.07 3.07 0 0 0 3.08 3.11z"
          fill="#f16822"
        />
      </svg>
    </span>
  );
};

const IconCardMastercard = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes('w-') ? className : `w-6 h-6 ${className}`
      } block `}>
      <svg viewBox="0 0 40 26" xmlns="http://www.w3.org/2000/svg">
        <path d="m24.05 6.72h-8.05v13.21h8.1z" fill="#ff5f00" />
        <path
          d="m16.79 13.33a8.35 8.35 0 0 1 3.21-6.61 8.41 8.41 0 0 0 -12.32 11.07 8.46 8.46 0 0 0 3.45 3.1 8.46 8.46 0 0 0 8.87-.95 8.39 8.39 0 0 1 -3.21-6.61z"
          fill="#eb001b"
        />
        <path
          d="m33.6 13.33a8.4 8.4 0 0 1 -13.6 6.6 8.42 8.42 0 0 0 2.37-10.28 8.56 8.56 0 0 0 -2.37-2.94 8.46 8.46 0 0 1 8.87-1 8.4 8.4 0 0 1 4.73 7.56z"
          fill="#f79e1b"
        />
      </svg>
    </span>
  );
};

const IconCardVisa = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes('w-') ? className : `w-6 h-6 ${className}`
      } block `}>
      <svg viewBox="0 0 40 26" xmlns="http://www.w3.org/2000/svg">
        <clipPath id="a">
          <path d="m3.72 7.69h32.06v10.42h-32.06z" />
        </clipPath>
        <g clipPath="url(#a)">
          <g fill="#00579f">
            <path d="m17.61 18h-2.61l1.64-10.13h2.6z" />
            <path d="m27 8.11a6.51 6.51 0 0 0 -2.33-.42c-2.56 0-4.37 1.37-4.38 3.33 0 1.45 1.29 2.26 2.27 2.74s1.35.81 1.35 1.25c0 .68-.81 1-1.56 1a5.24 5.24 0 0 1 -2.44-.53l-.34-.17-.36 2.27a7.85 7.85 0 0 0 2.9.53c2.72 0 4.49-1.35 4.52-3.44 0-1.15-.69-2-2.18-2.75-.91-.46-1.47-.77-1.47-1.24s.47-.87 1.5-.87a4.32 4.32 0 0 1 1.93.39l.24.1z" />
            <path d="m30.48 14.38c.22-.58 1-2.82 1-2.82l.34-1 .18.87s.49 2.42.6 2.92zm3.21-6.51h-2a1.29 1.29 0 0 0 -1.36.83l-3.87 9.3h2.73s.45-1.24.54-1.51h3.34c.07.36.31 1.51.31 1.51h2.4z" />
            <path d="m12.85 7.87-2.54 6.88-.31-1.4a7.74 7.74 0 0 0 -3.56-4.23l2.33 8.82h2.74l4.08-10.07z" />
          </g>
          <path
            d="m7.94 7.87h-4.17v.2a8.73 8.73 0 0 1 6.23 5.28l-.88-4.63a1.07 1.07 0 0 0 -1.18-.85z"
            fill="#faa61a"
          />
        </g>
      </svg>
    </span>
  );
};

const IconCardPaypal = ({ className }: Props) => {
  return (
    <span
      className={`${
        className?.includes('w-') ? className : `w-6 h-6 ${className}`
      } block `}>
      <svg
        width="36"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="icon__zqwY">
        <rect
          x=".5"
          y=".5"
          width="35"
          height="23"
          rx="3.5"
          fill="#fff"
          stroke="#DFE0E2"></rect>
        <path
          d="M21.875 9.013h-1.946a.286.286 0 00-.27.23l-.78 4.993a.169.169 0 00.166.192h.999c.09 0 .166-.064.192-.154l.217-1.408a.275.275 0 01.27-.23h.614c1.28 0 2.023-.615 2.215-1.844.09-.537 0-.96-.244-1.254-.294-.359-.78-.525-1.433-.525zm.217 1.818c-.102.704-.64.704-1.152.704h-.295l.205-1.306a.167.167 0 01.167-.14h.14c.346 0 .68 0 .858.204.09.115.116.294.077.538z"
          fill="#009CDE"></path>
        <path
          d="M7.997 9.015H6.051a.286.286 0 00-.269.23l-.78 4.993a.169.169 0 00.166.192h.934a.286.286 0 00.27-.23l.217-1.345a.275.275 0 01.269-.23h.614c1.28 0 2.023-.615 2.215-1.844.09-.537 0-.96-.243-1.254-.308-.346-.794-.512-1.447-.512zm.218 1.817c-.103.705-.64.705-1.152.705h-.295l.205-1.306a.167.167 0 01.166-.141h.141c.346 0 .679 0 .858.205.09.115.115.294.077.537zM13.81 10.805h-.935a.177.177 0 00-.167.141l-.038.256-.064-.09c-.205-.294-.653-.396-1.101-.396-1.024 0-1.908.78-2.074 1.869-.09.55.038 1.063.346 1.434.281.333.69.473 1.177.473.832 0 1.293-.537 1.293-.537l-.038.256a.169.169 0 00.166.192h.845a.286.286 0 00.27-.23l.498-3.188c0-.09-.076-.18-.179-.18zm-1.294 1.818c-.09.538-.512.884-1.05.884-.268 0-.486-.09-.627-.256-.14-.167-.192-.397-.14-.653a1.05 1.05 0 011.049-.896c.269 0 .474.09.627.256.116.166.18.41.141.665z"
          fill="#003087"></path>
        <path
          d="M27.687 10.805h-.934a.177.177 0 00-.167.141l-.038.256-.064-.09c-.205-.294-.653-.396-1.101-.396-1.024 0-1.908.78-2.074 1.869-.09.55.038 1.063.345 1.434.282.333.692.473 1.178.473.832 0 1.293-.537 1.293-.537l-.038.256a.169.169 0 00.166.192h.845a.286.286 0 00.269-.23l.5-3.188c0-.09-.078-.18-.18-.18zm-1.306 1.818c-.09.538-.512.884-1.05.884-.268 0-.486-.09-.627-.256-.14-.167-.192-.397-.14-.653a1.05 1.05 0 011.05-.896c.268 0 .473.09.626.256a.83.83 0 01.141.665z"
          fill="#009CDE"></path>
        <path
          d="M18.776 10.805h-.934c-.09 0-.18.038-.218.115l-1.293 1.907-.55-1.83a.273.273 0 00-.257-.192h-.934a.163.163 0 00-.154.217l1.037 3.022-.973 1.37c-.076.102 0 .255.128.255h.935c.09 0 .166-.038.218-.115l3.11-4.493a.154.154 0 00-.115-.256z"
          fill="#003087"></path>
        <path
          d="M28.787 9.14l-.793 5.083a.169.169 0 00.166.192h.807a.286.286 0 00.268-.23l.781-4.993A.169.169 0 0029.85 9h-.896c-.09.013-.154.064-.167.14z"
          fill="#009CDE"></path>
      </svg>
    </span>
  );
};
export {
  IconCardVisa,
  IconCreditCarDefault,
  IconCardAmex,
  IconCardMastercard,
  IconCardDiscover,
  IconCardPaypal,
};
