'use client';
import React from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils/tva';

const selectStyle = tva({
  base: '',
  variants: {},
});

const selectTriggerStyle = tva({
  base: 'border border-gray-300 rounded-md p-3 bg-white flex-row justify-between items-center',
  variants: {},
});

const selectInputStyle = tva({
  base: 'text-gray-900 flex-1',
  variants: {},
});

const selectContentStyle = tva({
  base: 'bg-white border border-gray-300 rounded-md shadow-lg',
  variants: {},
});

const selectItemStyle = tva({
  base: 'p-3 border-b border-gray-100',
  variants: {},
});

// Context for Select state
const SelectContext = React.createContext<{
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  selectedValue: string;
  selectedLabel: string;
  handleSelect: (value: string, label: string) => void;
} | null>(null);

const Select = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentPropsWithoutRef<typeof View> & {
    onValueChange?: (value: string) => void;
    className?: string;
  }
>(({ className, children, onValueChange, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('');
  const [selectedLabel, setSelectedLabel] = React.useState('');

  const handleSelect = (value: string, label: string) => {
    setSelectedValue(value);
    setSelectedLabel(label);
    setIsOpen(false);
    onValueChange?.(value);
  };

  return (
    <SelectContext.Provider value={{ isOpen, setIsOpen, selectedValue, selectedLabel, handleSelect }}>
      <View
        ref={ref}
        className={selectStyle({ class: className })}
        {...props}
      >
        {children}
      </View>
    </SelectContext.Provider>
  );
});

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  React.ComponentPropsWithoutRef<typeof TouchableOpacity> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(SelectContext);
  
  return (
    <TouchableOpacity
      ref={ref}
      className={selectTriggerStyle({ class: className })}
      onPress={() => context?.setIsOpen(true)}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
});

const SelectInput = React.forwardRef<
  React.ElementRef<typeof Text>,
  React.ComponentPropsWithoutRef<typeof Text> & {
    placeholder?: string;
    className?: string;
  }
>(({ placeholder, className, ...props }, ref) => {
  const context = React.useContext(SelectContext);
  
  return (
    <Text
      ref={ref}
      className={selectInputStyle({ class: className })}
      {...props}
    >
      {context?.selectedLabel || placeholder}
    </Text>
  );
});

const SelectIcon = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentPropsWithoutRef<typeof View> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => {
  return (
    <View
      ref={ref}
      className={className}
      {...props}
    >
      {children}
    </View>
  );
});

const SelectPortal = React.forwardRef<
  React.ElementRef<typeof Modal>,
  React.ComponentPropsWithoutRef<typeof Modal>
>(({ children, ...props }, ref) => {
  const context = React.useContext(SelectContext);
  
  return (
    <Modal
      ref={ref}
      visible={context?.isOpen}
      transparent
      animationType="fade"
      onRequestClose={() => context?.setIsOpen(false)}
      {...props}
    >
      {children}
    </Modal>
  );
});

const SelectBackdrop = React.forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  React.ComponentPropsWithoutRef<typeof TouchableOpacity>
>(({ children, ...props }, ref) => {
  const context = React.useContext(SelectContext);
  
  return (
    <TouchableOpacity
      ref={ref}
      style={{
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
      onPress={() => context?.setIsOpen(false)}
      activeOpacity={1}
      {...props}
    >
      <TouchableOpacity activeOpacity={1} style={{ width: '100%' }}>
        {children}
      </TouchableOpacity>
    </TouchableOpacity>
  );
});

const SelectContent = React.forwardRef<
  React.ElementRef<typeof ScrollView>,
  React.ComponentPropsWithoutRef<typeof ScrollView> & {
    className?: string;
  }
>(({ className, children, ...props }, ref) => {
  return (
    <ScrollView
      ref={ref}
      className={selectContentStyle({ class: className })}
      style={{
        maxHeight: 300,
        backgroundColor: 'white',
        borderRadius: 8,
        width: '100%',
      }}
      {...props}
    >
      {children}
    </ScrollView>
  );
});

const SelectDragIndicatorWrapper = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentPropsWithoutRef<typeof View>
>(({ children, ...props }, ref) => {
  return (
    <View
      ref={ref}
      style={{ alignItems: 'center', padding: 10 }}
      {...props}
    >
      {children}
    </View>
  );
});

const SelectDragIndicator = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentPropsWithoutRef<typeof View>
>(({ ...props }, ref) => {
  return (
    <View
      ref={ref}
      style={{
        width: 40,
        height: 4,
        backgroundColor: '#ccc',
        borderRadius: 2,
      }}
      {...props}
    />
  );
});

const SelectItem = React.forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  React.ComponentPropsWithoutRef<typeof TouchableOpacity> & {
    label: string;
    value: string;
    className?: string;
  }
>(({ label, value, className, ...props }, ref) => {
  const context = React.useContext(SelectContext);
  
  return (
    <TouchableOpacity
      ref={ref}
      className={selectItemStyle({ class: className })}
      onPress={() => context?.handleSelect(value, label)}
      {...props}
    >
      <Text style={{ fontSize: 16 }}>{label}</Text>
    </TouchableOpacity>
  );
});

Select.displayName = 'Select';
SelectTrigger.displayName = 'SelectTrigger';
SelectInput.displayName = 'SelectInput';
SelectIcon.displayName = 'SelectIcon';
SelectPortal.displayName = 'SelectPortal';
SelectBackdrop.displayName = 'SelectBackdrop';
SelectContent.displayName = 'SelectContent';
SelectDragIndicatorWrapper.displayName = 'SelectDragIndicatorWrapper';
SelectDragIndicator.displayName = 'SelectDragIndicator';
SelectItem.displayName = 'SelectItem';

export { 
  Select, 
  SelectTrigger, 
  SelectInput, 
  SelectIcon, 
  SelectPortal, 
  SelectBackdrop, 
  SelectContent, 
  SelectDragIndicator, 
  SelectDragIndicatorWrapper, 
  SelectItem 
};