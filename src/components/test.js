const styles = StyleSheet.create({
    heading: {
      textAlign: "right",
      backgroundColor: "red",
      "@media (max-width: 840px)": {
        textAlign: "center",
        backgroundColor: "green"
      },
      "@media (max-width: 767px)": {
        textAlign: "center",
        backgroundColor: "blue"
      }
    }
  });