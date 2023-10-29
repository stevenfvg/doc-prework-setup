'use client';

// React Hooks
import { useState, useMemo } from 'react';

// NesxtUI components
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  Kbd,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';

// JSX Components
import { SearchIcon } from './SearchIcon.jsx';
import { ChevronDownIcon } from './ChevronDownIcon';

export default function App() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(['English']));
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
    [selectedKeys]
  );

  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <p className="hidden sm:block font-bold text-inherit">
            Prewok Setup Documentation
          </p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link
              color="foreground"
              isExternal
              href="https://github.com/stevenfvg/doc-prework-setup"
              showAnchorIcon
            >
              GitHub
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" isDisabled>
              Windows
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" isDisabled>
              Ubuntu
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: 'max-w-full sm:max-w-[15rem] h-10',
            mainWrapper: 'h-full',
            input: 'text-small',
            inputWrapper:
              'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          endContent={<Kbd keys={['ctrl']}>K</Kbd>}
          type="search"
        />
        <Dropdown>
          <DropdownTrigger>
            <Button variant="flat" className="capitalize">
              {selectedValue}
              <ChevronDownIcon />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
          >
            <DropdownItem key="English">English</DropdownItem>
            <DropdownItem key="Spanish" isDisabled>
              Spanish
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
