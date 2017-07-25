import React from 'react'
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import FolderComponent from './FolderComponent';
import FileComponent from './FileComponent';
import TreeNode from './TreeNode';
import FolderTree from './FolderTree';

describe('test <FolderComponent />', () => {
  it('should render a FolderComponent with 1 checkbox, 1 <a> and 2 <i>', () => {
    const wrapper = shallow(
      <FolderComponent
        level={0}
        checked={0}
        handleCheck={()=>{}}
        filename={"test folder"}
        toggleFolder={()=>{}}
        open={true}
      />
    );

    expect(wrapper.containsMatchingElement(CheckBox)).to.equal(true);
    expect(wrapper.find('a')).to.have.length(1);
    expect(wrapper.find('a i')).to.have.length(2);

  });


});

describe('test <FileComponent />', () => {
  it('should render a FileComponent with 1 checkbox and 1 i', () => {
    const wrapper = shallow(
      <FileComponent
        level={0}
        checked={0}
        handleCheck={()=>{}}
        filename={"test file"}
      />
    );

    expect(wrapper.containsMatchingElement(CheckBox)).to.equal(true);
    expect(wrapper.find('i')).to.have.length(1);

  });
});

describe('test <TreeNode />', () => {
  it('should render a TreeNode with 1 FolderComponent and 1 ul', () => {
    const wrapper = mount(
      <TreeNode
        id={0}
        level={0}
        category={"folder"}
        filename={"testfilename"}
        checked={0}
        children={[]}
        setChildrenStatus={() => {}}
        fileComponent={FileComponent}
        folderComponent={FolderComponent}
      />
    );
    expect(wrapper.find('ul')).to.have.length(1);
    expect(wrapper.find('div')).to.have.length(2);
  });

  it('should render a TreeNode with 1 FileComponent', () => {
    const wrapper = shallow(
      <TreeNode
        id={0}
        level={0}
        category={"file"}
        filename={"testfilename"}
        checked={0}
        children={[]}
        setChildrenStatus={() => {}}
        fileComponent={FileComponent}
        folderComponent={FolderComponent}
      />
    );

    // expect(wrapper.containsMatchingElement(FileComponent)).to.equal(true);
    // expect(wrapper.find('div')).to.have.length(1);

  });
});

describe('test <FolderTree />', () => {

  const testData = {
    "id": 1,
    "filename": "All Categories",
    "children": [
      {
        "id": 2,
        "filename": "Main Folder",
        "children": [
          {
            "id": 3,
            "filename": "Nested Folder",
            "children": [
              {
                "id": 4,
                "filename": "Super Nested Folder",
                "children": [
                  {
                    "id": 5,
                    "filename": "Deep File",
                  },
                  {
                    "id": 6,
                    "filename": "Deep File 2",
                  },
                  {
                    "id": 7,
                    "filename": "empty",
                  }
                ]
              }
            ]
          },
        ]
      },
      {
        "id": 18,
        "filename": "Folder Two",
        "children": [
          {
            "id": 19,
            "filename": "empty1",
          },
          {
            "id": 20,
            "filename": "empty2",
          },
          {
            "id": 21,
            "filename": "empty3",
          }
        ]
      },
      {
        "id": 22,
        "filename": "Folder Three",
        "children": [
          {
            "id": 23,
            "filename": "empty1",
          },
          {
            "id": 24,
            "filename": "empty2",
          }
        ]
      },
      {
        "id": 25,
        "filename": "Private Folder",
        "children": [
          {
            "id": 26,
            "filename": "empty1",
          },
          {
            "id": 27,
            "filename": "empty2",
          }
        ]
      }
    ]
  }


  it('should render a folder tree', () => {
    const wrapper = shallow(
      <FolderTree
        data={testData}
      />
    );

    // expect(wrapper.containsMatchingElement(TreeNode)).to.equal(true);

  });
});
