import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Ionic from "react-native-vector-icons/Ionicons";

const EditProfile = ({ route }) => {
  const { name, accountName, profileImage } = route.params;
  const navigation = useNavigation();
  const TextMessage = () => {
    ToastAndroid.show("Edited successfully !", ToastAndroid.SHORT);
  };
  return (
    <>
      <View style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic name="close-outline" style={{ fontSize: 35 }} />
          </TouchableOpacity>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Edit profile</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic
              name="checkmark"
              style={{ fontSize: 35, color: "#3493D3" }}
              onPress={() => [TextMessage(), navigation.goBack()]}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            padding: 20,
            alignItems: "center",
          }}
        >
          <Image
            source={profileImage}
            style={{ width: 80, height: 80, borderRadius: 80 }}
          />
          <Text
            style={{
              color: "#3493D3",
            }}
          >
            Change profile photo
          </Text>
        </View>
        <View style={{ padding: 10 }}>
          <View>
            <Text style={{ opacity: 0.5 }}>Name</Text>
            <TextInput
              placeholder="name"
              defaultValue={name}
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: "#cdcdcd",
              }}
            />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ opacity: 0.5 }}>UserName</Text>
            <TextInput
              placeholder="AccountName"
              defaultValue={accountName}
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: "#cdcdcd",
              }}
            />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <TextInput
              placeholder="Website"
              // defaultValue={accountName}
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: "#cdcdcd",
              }}
            />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <TextInput
              placeholder="Bio"
              // defaultValue={accountName}
              style={{
                fontSize: 16,
                borderBottomWidth: 1,
                borderColor: "#cdcdcd",
              }}
            />
          </View>
        </View>
        <View>
          <Text
            style={{
              marginVertical: 10,
              padding: 10,
              color: "#3493D3",
              borderTopWidth: 1,
              borderColor: "#efefef",
            }}
          >
            Switch to Professional Account
          </Text>
          <Text
            style={{
              marginVertical: 10,
              padding: 10,
              color: "#3493D3",
              borderTopWidth: 1,
              borderColor: "#efefef",
            }}
          >
            Personal information setting
          </Text>
        </View>
      </View>
    </>
  );
};

export default EditProfile;
