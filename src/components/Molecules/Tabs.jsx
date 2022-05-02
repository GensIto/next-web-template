import React, {useState} from 'react';

export const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            {/* /=====================================================
            * TAB TITLE
            /======================================================*/}
            {/* 1 */}
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 1
                    ? 'text-white bg-indigo-500'
                    : 'text--600 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                TAB TITLE1
              </a>
            </li>

            {/* 2 */}
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 2
                    ? 'text-white bg-indigo-500'
                    : 'text-color-600 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                TAB TITLE2
              </a>
            </li>

            {/* 3 */}
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 3
                    ? 'text-white bg-indigo-500'
                    : 'text-color-600 bg-white')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                TAB TITLE3
              </a>
            </li>
          </ul>

          {/* /=====================================================
           * TAB CONTENT
          /======================================================*/}
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                {/* 1 */}
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <p>TAB CONTENT1</p>
                </div>

                {/* 2 */}
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <p>TAB CONTENT2</p>
                </div>

                {/* 3 */}
                <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                  <p>TAB CONTENT3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
