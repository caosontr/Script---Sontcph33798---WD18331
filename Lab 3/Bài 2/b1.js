function checkDogs(dogsJulia, dogsKate) {
    // Bước 1: Xóa tuổi mèo từ mảng của Julia
    const juliaCopy = dogsJulia.slice();
    juliaCopy.shift(); // Xóa tuổi mèo của chó đầu tiên
    juliaCopy.pop();   // Xóa tuổi mèo của chó cuối cùng

    // Bước 2: Tạo mảng mới chứa dữ liệu của cả Julia và Kate
    const combinedArray = juliaCopy.concat(dogsKate);

    // Bước 3: Kiểm tra và xuất thông báo về chó trưởng thành hoặc chó con
    combinedArray.forEach((age, index) => {
        const dogType = age >= 3 ? "chó trưởng thành" : "chó con";
        console.log(`Chó số ${index + 1} là ${dogType} và ${age} tuổi`);
    });
}

// Dữ liệu thử nghiệm
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

// Chạy hàm cho cả hai bộ dữ liệu thử nghiệm
checkDogs(dogsJulia, dogsKate);
