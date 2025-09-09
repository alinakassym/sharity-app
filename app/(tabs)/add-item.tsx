import { ScrollView, View } from "react-native";
import { useState } from "react";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { Progress, ProgressFilledTrack } from "@/components/ui/progress";
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
} from "@/components/ui/select";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { ChevronDownIcon } from "@/components/ui/icon";

type ListingType = "rent" | "sell" | "exchange" | "charity" | "";

export default function AddItemScreen() {
  const [currentStep, setCurrentStep] = useState(1);
  const [listingType, setListingType] = useState<ListingType>("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
  });

  const progress = (currentStep / 3) * 100;

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <View className="gap-6">
            <Text className="text-xl font-semibold">Тип размещения</Text>
            <Text className="text-gray-600">
              Выберите тип объявления для вашего товара
            </Text>

            <FormControl>
              <FormControlLabel>
                <FormControlLabelText>Тип размещения</FormControlLabelText>
              </FormControlLabel>
              <Select onValueChange={setListingType as any}>
                <SelectTrigger>
                  <SelectInput placeholder="Выберите тип" />
                  <SelectIcon className="mr-3">
                    <ChevronDownIcon />
                  </SelectIcon>
                </SelectTrigger>
                <SelectPortal>
                  <SelectBackdrop />
                  <SelectContent>
                    <SelectDragIndicatorWrapper>
                      <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    <SelectItem label="Аренда" value="rent" />
                    <SelectItem label="Продажа" value="sell" />
                    <SelectItem label="Обмен" value="exchange" />
                    <SelectItem label="Благотворительность" value="charity" />
                  </SelectContent>
                </SelectPortal>
              </Select>
            </FormControl>
          </View>
        );

      case 2:
        return (
          <View className="gap-6">
            <Text className="text-xl font-semibold">Информация о товаре</Text>
            <Text className="text-gray-600">Заполните основную информацию</Text>

            <FormControl>
              <FormControlLabel>
                <FormControlLabelText>Название</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  value={formData.title}
                  onChangeText={(text) =>
                    setFormData({ ...formData, title: text })
                  }
                  placeholder="Название товара"
                />
              </Input>
            </FormControl>

            <FormControl>
              <FormControlLabel>
                <FormControlLabelText>Описание</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  value={formData.description}
                  onChangeText={(text) =>
                    setFormData({ ...formData, description: text })
                  }
                  placeholder="Описание товара"
                />
              </Input>
            </FormControl>

            <FormControl>
              <FormControlLabel>
                <FormControlLabelText>Цена</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  value={formData.price}
                  onChangeText={(text) =>
                    setFormData({ ...formData, price: text })
                  }
                  placeholder="Цена (если применимо)"
                  keyboardType="numeric"
                />
              </Input>
            </FormControl>
          </View>
        );

      case 3:
        return (
          <View className="gap-6">
            <Text className="text-xl font-semibold">Предпросмотр</Text>
            <Text className="text-gray-600">
              Проверьте информацию перед публикацией
            </Text>

            <View className="bg-gray-50 p-4 rounded-lg">
              <Text className="font-semibold mb-2">Тип: {listingType}</Text>
              <Text className="font-semibold mb-2">
                Название: {formData.title}
              </Text>
              <Text className="font-semibold mb-2">
                Описание: {formData.description}
              </Text>
              <Text className="font-semibold mb-2">Цена: {formData.price}</Text>
            </View>

            <Button className="mt-4">
              <ButtonText>Опубликовать</ButtonText>
            </Button>
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="px-6 py-8">
        <Text className="text-2xl font-bold mb-6">Добавить товар</Text>

        <View className="mb-8">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-sm text-gray-600">
              Шаг {currentStep} из 3
            </Text>
            <Text className="text-sm text-gray-600">
              {Math.round(progress)}%
            </Text>
          </View>
          <Progress value={progress} className="h-2">
            <ProgressFilledTrack
              className="h-2"
              style={{ width: `${progress}%` }}
            />
          </Progress>
        </View>

        {renderStep()}

        <View className="flex-row justify-between mt-8">
          <Button
            variant="outline"
            onPress={prevStep}
            isDisabled={currentStep === 1}
            className="flex-1 mr-2"
          >
            <ButtonText>Назад</ButtonText>
          </Button>

          {currentStep < 3 && (
            <Button
              onPress={nextStep}
              isDisabled={currentStep === 1 && !listingType}
              className="flex-1 ml-2"
            >
              <ButtonText>Далее</ButtonText>
            </Button>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
